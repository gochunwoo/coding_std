// prompt( ); 라는 함수는 사용자에게 창을 띄어 값을 받음
// prompt( ); 를 사용하면 답을 할때까지 코드의 실행을 멈추고, 매우 오래된 방법
// prompt( ); 이쁘지도 않고 css로 바꾸지도 못함.....어떤 브라우저는 이런팝업을 제한하기도함
// const age = prompt("How old are you?");
// console.log(age);
// console.log(typeof age); // 값(String) 타입확인

// 한 type 으로 받아서 다른 타입으로 바꾸는 작업
// parseInt() // string을 number로 변환해줌
// 문자열을 정수(Number)로 변환해주는 함수
// console.log(typeof "15", typeof parseInt("15")); // string, number
// console.log(age, parseInt(age)); // 15입력 값 15 15 (하나는 string이고 하나는 number)
// console.log(age, parseInt(age)); // 문자입력 값(문자 NaN) 문자를입력하면 숫자가 아닌걸 알수있음
// 사용이유? 사용자에게 나이를 물어봣는데, 사용자가 숫자가 아닌걸 입력했을 경우를 인지할수있음

// const age = parseInt(prompt("How old are you?"));
// function은 내부에서부터 외부로 실행됨
// 첫번째 function [ prompt("How old are you?") ] 자바스크립트가 먼저 prompt로 물어봄
// 15로 답을하면 parseInt가 실행해서 15로 변환함(답해줌
// 문자열로 답을하면 parseInt가 NaN라고 변환함(답해줌
// console.log(age);

// 무언가가 NaN인지를 판별하는 방법
// console.log(isNaN(age)); // 숫자입력하면 false, 문자입력하면 true
// isNaN : 자바스크립트 내장함수로, 인자로 전잘된값이 숫자인지 아닌지를 확인 반환값은 boolean
const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {  // 조건이 참이면 실행
// condition === true
    console.log("숫자를 입력해 주세요 " + age)
}else {  // 조건이 거짓이면 실행
// condition === false
    console.log("당신의 나이를 읽었습니다. " + age);
}


















