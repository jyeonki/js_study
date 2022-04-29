// n의 값: 3
// 1의 제곱은 1
// 2의 제곱은 4
// 3의 제곱은 9

var n = +prompt('n의 값: ');
var a = 1;
var message = '';

while (a <= n) {
    var r = a*a;
    message += `${a}의 제곱은 ${r}\n`;
    a++;
}
alert(message);


// 풀이
var n = +prompt('정수값: ');
var i = 1;
var message = '';

while (i <= n) {
    message += `${i}의 제곱은 ${i ** 2}\n`;
    i++;
}
alert(message);





