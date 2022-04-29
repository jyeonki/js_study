
// 몇 개의 *을 출력할까요? 12
// *****
// *****
// **

var a = +prompt('몇 개의 *을 출력할까요? ');
var star = '';
var i = 1;    

while (i <= a) {
    star += '*'
    i++;   
    if (i % 5 === 0) {
        star += '\n'; 
    }
    alert(star);
}


// 풀이
// var n = +prompt('몇 개의 *를 출력할까요?');

var n = 12;
var i = 1;
var result = '';

while (i <= n) {
    result += '*';
    if (i % 5 === 0) {
        result += '\n';
    }
    i++;
}
// alert(result);
console.log(result);