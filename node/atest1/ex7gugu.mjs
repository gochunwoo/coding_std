// 키보드로 단을 입력받아 구구단 출력
import { EventEmitter } from "events";
import readline from "readline";

const myEvent = new EventEmitter();

const inout = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const printGugudan = (dan) => {
  console.log(`\n구구단 ${dan}단 출력`);
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
};

// 이벤트 등록
myEvent.on("guguevent", (dan) => {
  printGugudan(dan);
  inout.close(); // 키보드 입력 종료
});

// 이벤트 발생
inout.question("출력할 구구단 단수를 입력하세요(2~9): ", (inputDan) => {
  const dan = parseInt(inputDan, 10);
  if (!isNaN(dan)) {
    myEvent.emit("guguevent", dan);
  } else {
    console.log("오류 입니당");
    inout.close();
  }
});

// import { EventEmitter } from "events";
// import readlineSync from "readline-sync";
// import chalk from "chalk"; // 색상 모듈 추가

// const guguEvent = new EventEmitter();

// // 구구단 출력 이벤트 핸들러
// guguEvent.on("gugu", (dan) => {
//   console.log(chalk.greenBright.bold(`\n===== [${dan}단] =====`)); // 타이틀 강조
//   for (let i = 1; i <= 9; i++) {
//     // 곱셈식과 결과에 각각 다른 색상 적용
//     console.log(chalk.cyan(`${dan} x ${i}`) + chalk.yellow(` = ${dan * i}`));
//   }
//   console.log(chalk.greenBright.bold("=================\n")); // 하단 구분선
// });

// // 사용자 입력 받기
// const dan = readlineSync.questionInt(
//   chalk.magentaBright("출력할 구구단 단수를 입력하세요(2~9): ")
// );

// // 이벤트 발생
// guguEvent.emit("gugu", dan);
