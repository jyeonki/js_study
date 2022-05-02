

// 1. 변수의 중복선언 허용
var x = 10;
var x = 100;

console.log(x);


// 2. 블록레벨 스코프 지원X
var y = '안녕';
if (true) {
    var y = '잘가'; // 전역변수 취급
}
console.log(y);

for(var i = 0; i < 3; i++) {

}
console.log(`i: ${i}`); 

// i가 for문에서만 살아있어야한다, 그러나 자바스크립트는 i가 지역변수가 아닌 전역변수 취급이 된다


// 3. 변수 호이스팅

f = 100;
console.log(f);

var f;
// 변수 선언을 하지 않아도 사용가능하고, 나중에 선언해도 가능하다 => 문제!!!