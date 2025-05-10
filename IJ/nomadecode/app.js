/* ===================== 배열 (Array) ===================== */

// 배열은 하나의 변수에 여러 값을 저장하는 자료구조
// 일반적으로 "리스트 같은 객체(list-like object)"라고 부름
const daysofweek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

console.log("요일 배열 전체 출력:");
console.log(daysofweek);         // ["mon", "tue", ..., "sun"]

// 0부터 시작하는 인덱스를 사용함 (0-based indexing)
console.log("0번째 요일:", daysofweek[0]); // mon
console.log("1번째 요일:", daysofweek[1]); // tue

console.log("\n-----------------------------\n");

/* ===================== 객체 (Object) ===================== */
// 설명이 필요 없는 데이터는 배열(Array), 설명이 필요한 데이터는 객체(Object)
// 객체는 { 키: 값 } 형식의 데이터를 저장하는 자료구조
const player = {
    name: "tomato",
    color: "red",
    food: true
};

console.log("==== 객체 출력 ====");
console.log("초기 객체:", player);

// 객체 속성(property) 읽기 (두 가지 방법)
console.log("점 표기법:", player.name);        // tomato
console.log("대괄호 표기법:", player["name"]); // tomato

// 객체 속성 값 변경
player.color = "blue";
console.log("color 변경:", player.color);      // blue

// 새로운 속성 추가
player.koreanName = "토마토";
console.log("추가된 속성:", player);

// 객체 자체를 const로 선언했어도 내부 값은 변경 가능
// player = {}; // 전체 재할당은 불가능

console.log("\n-----------------------------\n");


/* ===================== 함수 (Function) ===================== */
// 함수는 재사용 가능한 코드 블록
// 함수에 인수(argument)를 전달해 동적으로 동작하게 만들 수 있음
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I am " + age + " years old.");
}

// 함수 호출 (데이터 전달)
sayHello("nico", 10);
sayHello("dal", 20);
sayHello("lyan", 30);
console.log("\n-----------------------------\n");

// 두 숫자를 더하는 함수
function plus(firstNumber, secondNumber) {
    console.log("더한 결과:", firstNumber + secondNumber);
}

// 두 숫자를 나누는 함수
function divide(a, b) {
    console.log("나눈 결과:", a / b);
}

// 함수 호출
plus(60, 8);    // 68
plus(98, 20);   // 118
divide(100, 5); // 20

console.log("\n-----------------------------\n");

const calculator = {
    add1: function (a, b) {
        return a + b;
    },

    add2: function (a, b) {
        return a - b;
    },

    add3: function (a, b) {
        return a / b;
    },

    add4: function (a, b) {
        return a * b;
    },

    add5: function (a, b) {
        return a ** b;
    }
}
const plusResult = calculator.add1(10, 20);
const minusResult = calculator.add2(plusResult, 20); // plus:30 - 20 = 10
const timesResult = calculator.add3(10, minusResult);// 10 나누기 10 = 1
const divideResult = calculator.add4(timesResult, plusResult); // 1 곱하기 30
const powerResult = calculator.add5(divideResult, minusResult); // 30 제곱 10 = 590490...
console.log("plusResult:", plusResult);
console.log("minusResult:", minusResult);
console.log("timesResult:", timesResult);
console.log("divideResult:", divideResult);
console.log("powerResult:", powerResult);