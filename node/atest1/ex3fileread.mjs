import fs from "fs"; // Es module 문법
// const fs = require('fs'); // CommonJs 문법

// 비동기 방식으로 파일 읽기
fs.readFile("./ex3read.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});

console.log("---------------");
// 동기 방식으로 파일 읽기
const filedata = fs.readFileSync("./ex3read.txt", "utf-8");
console.log(filedata + "처리 완료");

console.log("---------------");
// fs는 기본적으로 콜백 형식의 모듈이다. 이 때 promise 형식을 사용해 비동기 방식으로 파일 읽기도 가능
import { promises } from "fs";

promises
  .readFile("./ex3read.txt")
  .then((data) => {
    console.log(data.toString() + " promise 사용");
  })
  .catch((err) => {
    console.log("err : ", err);
  });
