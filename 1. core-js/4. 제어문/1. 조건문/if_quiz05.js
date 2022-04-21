
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