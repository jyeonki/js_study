
// 나눗셈연산과 나머지
console.log(27 / 5); 
// 자바에서는 정수의 나눗셈은 나머지를 가질 수 없다 // js는 정수개념이 없다, 실수나눗셈이 적용됨.
console.log(27 % 5);

console.log(5 % 4);

// 나눗셈 뒤에 숫자가 앞보다 크면 앞이 나머지다
console.log(4 % 10); // 몫은 0, 나머지는 4
console.log(7 % 8);
console.log(0 % 255);

// 0으로 나눌 수 없다
console.log(200 % 0);
console.log(10 / 0);

var num1 = 8, num2 = 5;
console.log(num1 % num2);


// 거듭제곱연산자(**) - ES6+
console.log(num2 ** 3);


// 증감연산자 (++, --): 단항연산자
// 1증가, 1감소
var x = 3;
x++;
++x; // 위아래 둘다 가능
x--;

console.log(`x: ${x}`);


// 전위 연산(prefix), 후위 연산(postfix)
var a = 10;
var b = a++; // 변수 뒤에 ++이 붙으면 후위연산, a가 10을 먼저 b에 넣고 나중에 ++이 작용해서 a가 11이 된다(=부터 작동하고 ++)

console.log(`a: ${a}, b: ${b}`); // 리터럴 ` 백틱 사용, a: 11, b: 10

var a1 = 10;
var b1 = ++a1; // 전위연산, ++부터 작동하고 =이 작동

console.log(`a1: ${a1}, b1: ${b1}`); // a1: 11, b1: 11

var c = 5;
var d = ++c * 2; // 연산자가 3개 = ++ *, =은 후위연산자보단 강하지만 나머지보다는 약하다
console.log(`c: ${c}, d: ${d}`); // c: 6, d: 12

var c1 = 5;
var d1 = c1++ * 2; // 후위연산이니까 ++값을 없다고 생각하고 c1*2 값을 d1에 넣는다. 그다음 c1++을 하면 c1: 6
console.log(`c1: ${c1}, d1: ${d1}`); // c1: 6, d1: 10

// 이 연산의 결과로 a1,b1,c1,d1,e의 값을 구하시오
var e = --b1 + c1++ * d1;
console.log(`a1: ${a1}, b1: ${b1}, c1: ${c1}, d1: ${d1}, e: ${e}`) // a1: 11, b1: 10, c1: 7, d1: 10, e: 70
console.log(a1, b1, c1, d1, e); 

//a 11 
//e 70 b 10 c 7 d 10
