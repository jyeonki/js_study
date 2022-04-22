
var targetNum = +prompt('양의 정수: ');
var tnCopy = targetNum;

var digit = 0; // 자리수를 기억할 변수

while (targetNum > 0) {
    targetNum = parseInt(targetNum / 10);
    digit++; // 10으로 계속 나눠서 targetNum이 0이 될 때까지 반복하고, 나눌 때마다 자리수를 하나씩 추가해준다.
}
alert(`${tnCopy}은(는) ${digit}자리입니다.`);

