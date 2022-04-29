
// 표준몸무게 공식 (키 - 100 ) * 0.9

/* 
몇 cm부터 : 155
몇 cm까지 : 190
몇 cm마다 : 5

155cm 49.50kg
160cm 54.00kg
...
190cm 81.00kg
*/

// console.log();

// from <= to - each

// to-from === each*n
// each*n+ from <= to


var from = +prompt('몇 cm부터');
var to = +prompt('몇 cm까지');
var each = +prompt('몇 cm마다');

var n = 0;
var stan;
var result = ''; 

while (each*n+ from <= to) {
    stan = (each*n+ from - 100) * 0.9;
    result += `${each*n+ from}cm ${stan}kg\n`;
    n++;
}
alert(result)


// 풀이
var lower = +prompt('몇 cm부터 : '); //키 시작점
var upper = +prompt('몇 cm까지 : '); //키 끝점
var step = +prompt('몇 cm마다 : '); //키 격차

var height = lower; //키를 저장할 변수

var message = '';
while (height <= upper) {
    var weight = (height - 100) * 0.9;
    message += `${height}cm ${weight}kg\n`;
    height += step;
}
alert(message);

