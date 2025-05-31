// 비동기 지원 함수로 setTimeout, nextTick ... 등이 있음
// 노드에서는 fs 모듈을 많이 사용함

// 비동기 처리 확인
import { readFile } from "fs";

console.log("출발");

readFile("./ex3read.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번" + data.toString());
});

readFile("./ex3read.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("2번" + data.toString());
});

readFile("./ex3read.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("3번" + data.toString());
});

console.log("종료");
