
var x = 10; // 전역 변수
/*
    함수 밖에 선언된 변수는 전역변수이고, 
    프로그램 전체에서 사용이 가능함.

    함수 안에서 선언된 변수는 지역변수이고,
    함수 안에서만 사용이 가능함.
    함수 호출이 끝나면 메모리에서 자동삭제됨.
*/
function foo() {
    var y = 3; // 지역 변수
    console.log(y);
    var z = x + y;
}

console.log(`x: ${x}`);
//console.log(`y: ${y}`);


console.log('===================================================');


var z = 'global z'; // 전역 변수

function bar() {
    var z = 'local z'; // 지역 변수
    console.log(`함수 내부: ${z}`);
    return z;
}

console.log(`함수 외부(호출 전): ${z}`); // global z
bar();
console.log(`함수 외부(호출 후): ${z}`); // global z

// return z; 이후 (local z를 쓰려면 밖으로 꺼내야한다 return)
var t = bar(); 
console.log(t);