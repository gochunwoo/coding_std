import * as tf from "https://esm.sh/@tensorflow/tfjs@4.17.0";

// 전역 변수
let model, housingData, chart;

// 데이터 처리 함수들
const fetchData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv"
  );
  if (!response.ok) throw new Error("데이터 로드 실패");
  return response.text();
};

const parseData = (data) =>
  data
    .split("\n")
    .slice(1)
    .filter((line) => line.trim())
    .map((line) => {
      const cols = line.split(",");
      return {
        rooms: parseFloat(cols[5]),
        price: parseFloat(cols[13]),
      };
    });

// 모델 관련 함수들
const createModel = () => {
  model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  model.compile({ loss: "meanSquaredError", optimizer: tf.train.sgd(0.01) });
  return model;
};

const prepareData = (data) =>
  tf.tidy(() => {
    tf.util.shuffle(data);
    const inputs = data.map((d) => d.rooms);
    const labels = data.map((d) => d.price);

    const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    const [inputMax, inputMin] = [inputTensor.max(), inputTensor.min()];
    const [labelMax, labelMin] = [labelTensor.max(), labelTensor.min()];

    return {
      inputs: inputTensor.sub(inputMin).div(inputMax.sub(inputMin)),
      labels: labelTensor.sub(labelMin).div(labelMax.sub(labelMin)),
      inputMax,
      inputMin,
      labelMax,
      labelMin,
    };
  });

// UI 관련 함수들
const formatPrice = (price) =>
  Math.round(price * 1300)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const showData = (data) => {
  // 차트 데이터 준비
  const chartData = {
    labels: data.map((d) => d.rooms.toFixed(2)),
    datasets: [
      {
        label: "실제 주택 가격",
        data: data.map((d) => d.price),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // 차트 설정
  const config = {
    type: "scatter",
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "방 개수",
          },
        },
        y: {
          title: {
            display: true,
            text: "주택 가격 (달러)",
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "방 개수와 주택 가격의 관계",
        },
      },
    },
  };

  // 기존 차트가 있다면 제거
  if (chart) {
    chart.destroy();
  }

  // 새 차트 생성
  const ctx = document.getElementById("scatter-chart").getContext("2d");
  chart = new Chart(ctx, config);
};

// 회귀선 추가 함수
const addRegressionLine = (model, inputMin, inputMax, labelMin, labelMax) => {
  // x축 범위 설정 (방 개수)
  const xMin = inputMin.dataSync()[0];
  const xMax = inputMax.dataSync()[0];

  // 회귀선을 위한 x값 생성
  const xValues = [xMin, xMax];

  // 예측값 계산
  const predictions = xValues.map((x) => {
    const normalizedX = (x - xMin) / (xMax - xMin);
    const prediction = model.predict(tf.tensor2d([[normalizedX]], [1, 1]));
    const denormalizedY =
      prediction.dataSync()[0] *
        (labelMax.dataSync()[0] - labelMin.dataSync()[0]) +
      labelMin.dataSync()[0];
    return { x, y: denormalizedY };
  });

  // 회귀선 데이터셋 추가
  chart.data.datasets.push({
    label: "회귀선",
    data: predictions,
    type: "line",
    borderColor: "rgba(255, 159, 64, 1)",
    borderWidth: 2,
    pointRadius: 0,
    fill: false,
  });

  chart.update();
};

// 메인 분석 함수
export async function runAnaylsis() {
  try {
    // 1. 데이터 준비
    const rawData = await fetchData();
    housingData = parseData(rawData);
    if (!housingData?.length) throw new Error("데이터가 없습니다.");

    // 2. UI 업데이트
    showData(housingData);

    // 3. 모델 학습
    const model = createModel();
    const { inputs, labels, inputMin, inputMax, labelMin, labelMax } =
      prepareData(housingData);

    await model.fit(inputs, labels, {
      epochs: 100,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          if (epoch % 10 === 0) {
            document.getElementById(
              "actualPrediction"
            ).textContent = `현재 손실값: ${logs.loss.toFixed(4)}`;
          }
        },
      },
    });

    // 회귀선 추가
    addRegressionLine(model, inputMin, inputMax, labelMin, labelMax);

    // 4. 예측 이벤트 설정
    document.getElementById("predictButton").addEventListener("click", () => {
      const rooms = parseFloat(document.getElementById("roomsInput").value);
      if (isNaN(rooms)) {
        alert("유효한 방 개수를 입력하세요");
        return;
      }

      // 입력값 정규화
      const normalizedRooms =
        (rooms - inputMin.dataSync()[0]) /
        (inputMax.dataSync()[0] - inputMin.dataSync()[0]);
      const prediction = model.predict(
        tf.tensor2d([[normalizedRooms]], [1, 1])
      );
      const denormalizedPrice =
        prediction.dataSync()[0] *
          (labelMax.dataSync()[0] - labelMin.dataSync()[0]) +
        labelMin.dataSync()[0];

      document.getElementById(
        "singlePrediction"
      ).textContent = `예상 주택 가격: ${formatPrice(denormalizedPrice)}원`;

      // 예측 결과를 차트에 추가
      chart.data.datasets.push({
        label: "예측값",
        data: [
          {
            x: rooms,
            y: denormalizedPrice,
          },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        pointRadius: 8,
      });
      chart.update();
    });
  } catch (error) {
    console.error("분석 중 오류 발생:", error);
    alert("분석 중 오류가 발생했습니다: " + error.message);
  }
}

// 이벤트 리스너
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("showButton").addEventListener("click", runAnaylsis);
});
