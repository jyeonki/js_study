
// 줄바꿈하여 별* 표시하기
/*
    몇 개의 *를 표시할까요? 33
    몇 개마다 줄 바꿈할까요? 5

    *****
    *****
    *****
    *****
    *****
    *****
    ***
*/

/*
var star = '';
for (var i = 1; i <= 33; i++){
    star += '*';
    if (i % 5 === 0) {
        star += '\n'
    }
}
console.log(star);
*/

/*
var i = +prompt('몇 개의 *를 표시할까요? ')
var j = +prompt('몇 개마다 줄 바꿈할까요?')

var star = '';
for (var a = 1; a <= i; a++){
    star += '*';
    if (a % j === 0) {
        star += '\n'
    }    
}
alert(star)
*/


// 풀이

//총 별의 숫자
var starNum = 33;
//줄바꿈할 별의 개수
var width = 5;
var star = '';

//총 줄 수 구하기
var line = parseInt(starNum / width);

for (var i = 0; i < line; i++) {
    for(var j = 0; j < width; j++) {
        star += '*';
    }
    star += '\n';
}

//남은 별의 개수 구하기
var rest = starNum % width;

if (rest > 0) {
    for (var k = 0; k < rest; k++) {
        star += '*';
    }
}
console.log(star);