import readline from "readline";

// BMI 판정 기준 함수
const getBmicategory = (bmi) => {
  if (bmi < 18.5) return "저체중";
  if (bmi >= 18.5 && bmi < 23) return "정상";
  if (bmi >= 23 && bmi < 25) return "비만전단계";
  if (bmi >= 25 && bmi < 30) return "경도 비만";
  if (bmi < 35) return "중등도 비만";
  return "고도 비만";
};

// 사용자 입력 받기
const rdat = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("비동기 처리 시작 ---------------");

rdat.question("키(cm)를 입력하세요: ", (height) => {
  rdat.question("몸무게(kg)를 입력하세요: ", (weight) => {
    console.log(`키: ${height}cm, 몸무게: ${weight}kg`);
    const heightMeters = height / 100;
    const bmi = weight / heightMeters ** 2;
    const category = getBmicategory(bmi);
    console.log(`BMI: ${bmi.toFixed(2)}, 체형: ${category}`);
    rdat.close();
  });
});
