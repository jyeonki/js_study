
var targetNum = 25;

var result = '';
var n = 1;
while (n <= targetNum) {
    result += n % 10;
    n++;
}

// 풀이
var targetNum = +prompt('양의 정수: ');

var result = '';
var n = 1;
while (n <= targetNum) {
    result += n % 10;
    n++;
}
alert(result);