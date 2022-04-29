
alert('3개의 정수를 입력하세요')
var num1 = +prompt('정수 1: ')
var num2 = +prompt('정수 2: ')
var num3 = +prompt('정수 3: ')

if (num1 <= num2) {
    if (num1 <= num3){
        alert(`최솟값은 ${num1}입니다.`)
    } else {
        alert(`최솟값은 ${num3}입니다.`)
    }
} else if (num2 <= num3) {
    if (num2 <= num1) {
        alert(`최솟값은 ${num2}입니다.`)
    } else {
        alert(`최솟값은 ${num1}입니다.`)
    }
} else if (num3 <= num1) {
    if (num3 <= num2) {
        alert(`최솟값은 ${num3}입니다.`)
    } else {
        alert(`최솟값은 ${num2}입니다.`)
    }
}


// 풀이1
var a = +prompt('정수 A');
var b = +prompt('정수 B');
var c = +prompt('정수 C');

var min = a; //최소값 저장 변수
if (a < b) {
    if (a < c) {
        min = a;
    } else {
        min = c;
    }
} else {
    if (b < c) {
        min = b;
    } else {
        min = c;
    }
}
alert(`최소값은 ${min}입니다.`);


// 풀이 2
var min = a;
if (b < min) min = b;
if (c < min) min = c;

alert(`최소값은 ${min}입니다.`)
