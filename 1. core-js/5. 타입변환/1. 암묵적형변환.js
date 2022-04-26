

// 문자타입으로 암묵적 변환
var ex1 = 10 + '20';       // 1020
console.log(typeof ex1);
console.log(ex1);

var ex2 = '' + 300;
console.log(typeof ex2);

var ex3 = false + '';
console.log(`ex3 type: ${typeof ex3}`);

var ex4 = 'hello' + 10 + 20;   // hello1020
// 'hello10' + '20'
var ex4 = 'hello' + (10 + 20); // hello30
console.log(ex4);


// 숫자타입으로 암묵적 변환
var ex6 = 10 - '4';            // 6
console.log(`ex6: ${ex6}`);

var ex7 = 50 * '3';            // 150
console.log(`ex7: ${ex7}`);

console.log(+'');
console.log(+'100');
console.log(+true);
console.log(+false);
console.log(+null);