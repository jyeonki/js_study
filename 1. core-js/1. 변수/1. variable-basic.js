
// 프로그램 내에서 사용할 데이터를 저장해놓고 쓰고싶어요

// 1.변수를 선언 (만들다)
var result; // 변수 이름 만들어 이름은 result야

// 2. 변수의 초기화 (initialize: 값을 저장, reset 아님 )
result = 10 + 20; // var는 처음 만들 때 한 번만 붙인다, = 대입(우항의 값을 좌항에 넣어라)

// result에 저장된 값을 화면에 보여줘라
console.log(result);

// 3. 변수의 값 수정(변경)
result = 50;
console.log(result);

// 4. 변수에 변수값을 저장
result = result * 2 // result의 2배를 한 값을 다시 result에 저장
console.log(result);

console.log(result + 10); // result에 10을 더한 값을 출력해줘, 110을 출력하지만 변하진 않음
console.log(result); // 값은 그대로 100(변수값 변경을 하지 않았으니까)

// 변수는 선언과 초기화를 동시에 할 수 있음
// var number;
// number = 70;
var number = 70;

// 변수끼리의 연산도 가능
console.log(result - number);

number = result - 20;
console.log(number);

// 문자열을 저장할 때는 따옴표(홑, 겹따옴표 둘다 가능)
var friend_name = '고길동';