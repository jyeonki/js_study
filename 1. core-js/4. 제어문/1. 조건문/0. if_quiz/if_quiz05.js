
alert('3개의 정수를 입력하세요');
var numA = +prompt('정수 A: ');
var numB = +prompt('정수 B: ');
var numC = +prompt('정수 C: ');

if (numA === numB && numB === numC){
    alert('3개 값이 모두 같습니다');
} else if (numA === numB || numA === numC || numB === numC) {
    alert('2개 값이 같습니다');
} else {
    alert('값이 모두 다릅니다');
}

// 풀이

if (a === b === c) // 이렇게 하면 먼저 a === b의 결과값을 계산하면 true라는 답이 나온다, 거기서 true 값과 c값을 비교한다

var a = +prompt('정수 A');
var b = +prompt('정수 B');
var c = +prompt('정수 C');

if (a === b && b === c) {
    alert('3개 값이 모두 같습니다.');
} else if (a === b || b === c || c == a) {
    alert('2개 값이 같습니다.');
} else {
    alert('모두 다른 값입니다.');
}