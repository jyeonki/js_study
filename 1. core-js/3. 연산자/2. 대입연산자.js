
var x = 10;

x += 5; // x = x + 5;, x에 5를 더해서 대입하세요

x -= 3; // x = x - 3

x *= 2; // x = x * 2

x /= 4; // x = x / 4

x %= 4; // x = x % 4

x **= 3; // x = x ** 3

console.log(`x: ${x}`);

var y = 5;
y =+ 3; // (x) 3을 더하는게 아니라 양수3을 대입한다
console.log(`y: ${y}`);

// =은 무조건 오른쪽에 온다

var z;
z += 4; // z는 undefined
console.log(`z: ${z}`);

var z = 'zz';
z += 4; 
console.log(`z: ${z}`); // z: zz4

// 문자열과 다른 타입의 덧셈: 결합연산
console.log('10' + 20); // 결합은 이어붙인다

var num = 7;
num--; // 연산횟수 1회
num -= 1; // num = num - 1; 연산횟수 2회

// = 이 있냐 없냐 차이가 있다
let q = 2;
let w = 1 + (q *= 2); // q = 4, w = 5

let q1 = 2;
let w1 = 1 + (a1 * 2); // q1 = 2, w1 = 5 