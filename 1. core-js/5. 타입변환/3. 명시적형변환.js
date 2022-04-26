
// 명시적 문자열 변환
var a = 10, b = 20;

// var result = ''+ a + b;
// var result = String(a) + String(b);
var result = a.toString() + b.toString();

console.log(result);



// 명시적 숫자 변환
console.log('===================================');

var m = '10', n ='5.5';

// var result2 = +m + +n;
// var result2 = Number(m) + Number(n);
var result2 = parseInt(m) + parseFloat(n);

console.log(result2);



// 명시적 논리 변환
console.log('===================================');

var logic = null;
// var result3 = Boolean(logic);
var result3 = !!logic;

console.log(result3);

// truthy falsy는 논리가 아닌 것을 논리로 판단하려고 한 것