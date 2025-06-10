import readlineSync from "readline-sync";
import chalk from "chalk";

const getBmiCategory = (bmi) => {
  if (bmi < 18.5) return chalk.cyan("저체중");
  if (bmi >= 18.5 && bmi < 23) return chalk.green("정상");
  if (bmi >= 23 && bmi < 25) return chalk.yellow("비만전단계");
  if (bmi >= 25 && bmi < 30) return chalk.keyword("orange")("경도 비만");
  if (bmi < 35) return chalk.redBright("중등도 비만");
  return chalk.bgRed.white.bold("고도 비만");
};

console.log(chalk.bold.bgBlue.white("\n🧮 BMI 계산기 시작합니다!\n"));

console.log(chalk.bold("📏 키 입력"));
const height = readlineSync.questionInt(chalk.blue("키(cm)를 입력하세요: "));
console.log(chalk.gray(`▶ 입력한 키: ${height}cm\n`));

console.log(chalk.bold("⚖️ 몸무게 입력"));
const weight = readlineSync.questionInt(
  chalk.blue("몸무게(kg)를 입력하세요: ")
);
console.log(chalk.gray(`▶ 입력한 몸무게: ${weight}kg\n`));

const heightMeters = height / 100;
const bmi = weight / heightMeters ** 2;

console.log(chalk.bold("\n📊 결과"));
console.log(`BMI 수치: ${chalk.magenta(bmi.toFixed(2))}`);
console.log(`분류 결과: ${getBmiCategory(bmi)}\n`);
