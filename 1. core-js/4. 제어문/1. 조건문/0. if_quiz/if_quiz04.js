
alert('2개의 정수를 입력하세요');

var num1 = +prompt('정수 1: ');
var num2 = +prompt('정수 2: ');

if (num1 >= num2) {
    alert(`두 값의 차이는 ${num1 - num2}입니다.`);
} else {
    alert(`두 값의 차이는 ${num2 - num1}입니다.`);
}


// 풀이1
var a = +prompt('정수 A');
var b = +prompt('정수 B');

//두 값의 차이를 구한다.
var diff = a - b;
if (a < b) {
    diff = -diff;
}


// 풀이 2
var diff = (a > b) ? a - b : b - a;

alert(`두 값의 차이는 ${diff}입니다.`);