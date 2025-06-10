// 비동기로 파일, 웹문서 일기 + 이벤트 처리
import { readFile } from "fs";
import https from "https";
import { EventEmitter } from "events";

const fileEvent = new EventEmitter();

fileEvent.on("myreadfile", (filePath) => {
  readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("파일 읽기 실패" + err);
      return;
    }
    console.log(data);
  });
});

fileEvent.emit("myreadfile", "ex3read.txt");
console.log("(비동기) 궁금하면 500원");

console.log("비동기 처리로 웹 문서 읽기");

const webEvent = new EventEmitter();
/*
webEvent.on("mywebread", (url) => {
  https.get(url, (resp) => {
    resp.on("data", (chunk) => {
      // 버퍼를 문자열로 변환해서 출력
      console.log(chunk.toString());
    });
    resp.on("end", () => {
      console.log("=== 데이터 수신 완료 ===");
    });
  });
});
webEvent.emit("mywebread", "https://jsonplaceholder.typicode.com/posts/1");
*/
// try catch 문으로 예외처리
webEvent.on("myfetchData", () => {
  https.get("https://jsonplaceholder.typicode.com/posts/1", (resp) => {
    let data = "";
    resp.on("data", (chunk) => {
      data += chunk;
    });
    resp.on("end", () => {
      console.log("data :", data);
      try {
        const jsonData = JSON.parse(data);
        console.log("jsondata :", jsonData);
      } catch (err) {
        console.log("jsondata 파싱 실패 :", err);
      }
    });
    resp.on("error", (err) => {
      console.log("fetch fail : ", err.message);
    });
  });
});
 
webEvent.emit("myfetchData");
console.log("비동기 처리 완료");
