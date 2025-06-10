// 이전 실습을 순서대로 처리하고 싶다면 promises 객체를 사용
import { promises as fspro } from "fs";

console.log("가즈아!");

fspro
  .readFile("ex3read.txt", "utf-8")
  .then((data) => {
    console.log("1번" + data.toString());
    return fspro.readFile("ex3read.txt", "utf-8");
  })
  .then((data) => {
    console.log("2번" + data.toString());
    return fspro.readFile("ex3read.txt", "utf-8");
  })
  .then((data) => {
    console.log("3번" + data.toString());
    console.log("끝낫네");
  })
  .catch((err) => {
    console.log(err);
  });

console.log("종료");
