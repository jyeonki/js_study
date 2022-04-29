
// 함수 정의부

// return은 함수의 탈출문
function add(n1, n2) {
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
    return n1 + n2;
    console.log('dddddddd');
}
function multi(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

function callName(nickname) {
    // 금지어 리스트
    var prohibits = ['바보', '멍청이', '도라이'];
    if (prohibits.includes(nickname)) {
        console.log('나쁜말 닉네임은 안돼요!');
        return; // 함수 강제종료
    }
    console.log(`${nickname}님 안녕하세요!`);
}

function foo() {
    var n = 1;
    while (n < 5) {
        if (n === 3) {
            return;        // break도 가능, 차이가 있음
        }
        console.log(`${n}!!`);
        n++;
    } // end while 
    console.log('반복문 끝!!');
} // end function foo


//=================================================================================//


// 함수 호출부
// return값이 없는 함수는 변수에 저장하면 안됨
var r1 = add(10, 20);
var r2 = multi(5, 3);
console.log(`r1: ${r1}, r2: ${r2}`);

// return을 쓰지않으면 값을 가지고 나올 수없다


console.log('==================================================');


var r3 = multi(add(2, 4), add(5, 1));
console.log(`r3: ${r3}`);

// return값이 없는 함수는 다른 함수의 인수로 사용할 수 없음
var r4 = add(multi(3, 2), add(4, add(6, 3)));
console.log(`r4: ${r4}`);

callName('도우너');
callName('바보');


console.log('==================================================');


foo();


// 함수의 리턴값은 언제나 하나!
// 2개의 정수를 전달받아서 +-*/ 4가지 값을 리턴받고 싶다?!

function operateAll(n1, n2) {
    var obj = {
        plus: add(n1+n2), 
        minus: n1-n2,
        multi: n1*n2,
        divide: n1/n2
    };
    return obj;  // 배열, 객체도 하나로 판단한다!
}

var resultList = operateAll(10, 5)
console.log(resultList.minus);
console.log(resultList.multi);

// obj가 배열이면
// console.log(resultList[1]);
// console.log(resultList[2]);
