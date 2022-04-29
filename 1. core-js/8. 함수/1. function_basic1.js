
/*
var userName;
userName = '김철수';
console.log(`${userName}님 안녕하세요~ 방가방가!`);
console.log(`${userName}님 오늘도 즐거운 하루되세요!`);


// ~~~~~1000줄 코드~~~~


userName = '박영희';
console.log(`${userName}님 안녕하세요~ 반갑습니다!`);
console.log(`${userName}님 오늘도 즐거운 하루되세요!`);


// ~~~~~ 2000줄 코드 ~~~~


userName = '홍길동';
console.log(`${userName}님 안녕하세요~ 반갑습니다!`);
console.log(`${userName}님 오늘도 즐거운 하루되세요!`);
*/

// 함수 정의 (함수 만든다)
function callUserName(userName) {
    if (typeof userName === 'number') {
        console.log('숫자로 된 이름은 안됩니다~~');
        return; // 함수의 탈출문
    }
    console.log(`${userName}님 hello~ 반갑습니다!`);
    console.log(`${userName}님 오늘도 즐거운 하루되세요!`);
    console.log('=============================================');
} // 여기 {}는 리터럴이 아니라 블록, ;쓰지 않는다


// 함수 호출 (함수를 사용한다)
callUserName('박찬호');
callUserName('김영희');

// ~~~~~1000줄 코드~~~~

callUserName('둘리');
callUserName(100);