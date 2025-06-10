export function abc() {
  // alert('a');
  const model = tf.sequential(); // 순차모델 생성(단순한 신경망 모델로 Layer가 순서대로 쌓여 있는 구조)

  // dense (node, 뉴런)
  model.add(tf.layers.dense({ units: 1, inputShape: [1] })); // 1차 Layer 쌓기

  // compile (학습을 위한 준비 : 손실함수와 최적화 함수를 설정)
  // optimizer : y=wx + b 일때 랜덤한 w(기울기), b(절편)를 최적의 값으로 조정
  // loss : 학습을 위한 손실함수
  // sgd : 학습을 위한 최적화 함수
  model.compile({ loss: "meanSquaredError", optimizer: "sgd" }); // 학습 모델 생성

  const xs = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 1]); // 독립변수(x, 문제) : 영향을 주는 변수
  const ys = tf.tensor1d([1, 0, 5, 4, 6, 8, 4, 8, 9, 12]); // 종속변수(y, 답) : 영향을 받는 변수
  // 학습된 모델을 통해 미지의 숫자에 대한 답을 예측을 하는게 목적

  // 데이터를 이용해 학습
  model.fit(xs, ys).then(() => {
    // 학습 모델 적용(학습모델 쌓기, 학습 모델 적용)
    const prediction = model.predict(tf.tensor2d([6], [1, 1])); // 모델이 예측한 결과 반환 => 6일때
    prediction.print();
    // document.getElementById("aa").innerText = prediction.toString(); // 문자열로 변환
    document.getElementById("aa").innerText = prediction.dataSync(); // 배열로 변환
    chart();
  });

  function getData() {
    // dataSync() : 텐서(벡터, 배열)의 모든 값을 동기적으로 가져와 자바스크립트 배열로 반환
    const dataX = xs.dataSync();
    const dataY = ys.dataSync();

    return Array.from(dataX).map((value, index) => {
      return { index: value, value: dataY[index] };
    });
  }

  function chart() {
    const surface = tfvis
      .visor()
      .surface({ name: "MyBarchart", tab: "Charts" });
    tfvis.render.barchart(surface, getData());
  }
}
