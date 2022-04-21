
// 논리 타입 (boolean)
var logic = 10 < 5; //logic에는 false라는 논리값이 저장된다

console.log(typeof logic);
console.log(logic);

var x = true;  // 파이썬이랑 다름, True (X)
var y = false;                  // False (X)

var m = 'true'; // string


// undefined 타입 -> 값: undefined
// 변수를 선언만하고 초기화하지 않은 경우
var fruit; // 변수 선언
var fruit = ''; // 이건 undefined가 아니다, 빈 문자열이 들어있다
console.log(fruit);


// null 타입 -> 값: null
// 개발자가 의도를 가지고 값이 아예 없음을 표현
var apple = '사과';
apple = null // apple이라는 변수는 살아있지만 사과라는 값은 사라짐

var money = 50000;
money = null;
money = 0; // 값이 없는게 아니라 0이라는 값이 있는거임