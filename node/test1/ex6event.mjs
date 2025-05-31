// 이벤트 처리
// 이벤트모둘 사용 eventEmitter 객체로 이벤트와 핸들러를 연결 =- 동기적으로 호출
import { EventEmitter } from "events";

const myEvent = new EventEmitter();

// addListener(이벤트명, 콜백). on()과 같은기능 => 이벤트 처리 메서드
myEvent.addListener("event1", () => {
  console.log("이벤트1");
});

// on() - 이벤트 처리 메서드
// 이벤트 처리 메서드
myEvent.on("event2", () => {
  console.log("이벤트2");
});

myEvent.on("event2", () => {
  console.log("이벤트2 추가");
});

// once() - 이벤트 처리 메서드
// 1번만 실행
myEvent.once("event3", () => {
  console.log("이벤트3");
});

myEvent.emit("event1"); // 이벤트 호출. 이벤트를 발생시키는 메소드
myEvent.emit("event2");
myEvent.emit("event3");
myEvent.emit("event3");

console.log("--------------------------------");
myEvent.on("event4", () => {
  // myEvent.addListener()와 같은 기능
  console.log("이벤트4 추가");
});
myEvent.emit("event4");
myEvent.removeAllListeners("event4");
myEvent.emit("event4");

// off() - 이벤트 처리 메서드
// 함수(핸들러)를 변수로 저장해서 등록/제거할수있음
const event5Handler = () => {
  console.log("안녕~");
};

console.log("등록 전:", myEvent.listenerCount("event5")); // 0
myEvent.on("event5", event5Handler); // 이벤트 등록방법 : 이벤트 핸들러 작성 후 등록
console.log("등록 후:", myEvent.listenerCount("event5")); // 1
myEvent.off("event5", event5Handler); // 이벤트 제거방법 : 이벤트 핸들러 변수로 제거
console.log("제거 후:", myEvent.listenerCount("event5")); // 0
myEvent.emit("event5");

// const myEvent2 = new myEvent2();

// 1. 클래스 상속
class MyEmitter extends EventEmitter {}
const myEvent2 = new MyEmitter();

myEvent2.on("event", () => {
  console.log("이벤트 만세");
});

myEvent2.emit("event");

// 매개변수 전달
const myEvent3 = new MyEmitter();

myEvent3.on("eventok", (a, b) => {
  console.log(a, b);
});

myEvent3.emit("eventok", "kbs ", "공영방송");
