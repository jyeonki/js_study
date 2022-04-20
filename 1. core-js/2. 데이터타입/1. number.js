
var decimal = 100; // 숫자타입 변수

// typeof 연산자: 변수에 저장된 값의 타입을 알려줌
console.log(typeof decimal);

var float = 3.14; // 실수 -> 숫자타입
console.log(typeof float)

// js는 모든 숫자데이터틀 실수값으로 처리
console.log(10 / 4); // 자바는 10.0 / 4.0 으로 적어야 2.5라는 실수값이 뜬다, 안그러면 2라는 정수값으로 뜬다

var binary = 0b1001; // 2진수값 저장, 1001이라고만 적으면 1001로 저장(2진수값 아님)
console.log(binary); // 10진수로 자동 변환됨

// NaN: 산술연산 불가능을 표현하는 값
console.log(10 / '메롱');