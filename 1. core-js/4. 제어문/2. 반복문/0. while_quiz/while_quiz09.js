
var x = +prompt('정숫값: ');
var a = 1;
var message = '';
while (a <= x) {
    if (a % 2 === 1) {
        message += `${a} ` 
    }
    a++;
}
alert(message)


// 풀이 
var num = +prompt('정수값: ');
var i = 1;
var message = '';
while (i <= num) {
    if (i % 2 === 1) {
        message += i + ' ';
    }
    i++;
}
alert(message);


