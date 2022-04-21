
var a = 5;
var b = '5';

console.log(a == b); // true
console.log(a != b); // false
/*
    ==, != 연산자는 암묵적으로 문자열 내부에 순수한 숫자가 있으면 자동으로 따옴표를 제거한 후 비교합니다.
    쓰지 말 것!
*/
console.log(a === b); // false
console.log(a !== b); // true


console.log('==========================');

console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');

console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');


console.log('==========================');
// 숫자 대소 비교
var z = 10;
console.log(z > 5);
console.log(z <= 10);


console.log('==========================');
// 문자열 대소 비교
console.log('a' === 'A');
console.log('안녕하세요' === '안녕 하세요'); // 띄어쓰기도 글자 수에 포함, 컴퓨터는 글자 수가 다르면 처음부터 다르다고 판단


// 모든 문자에는 숫자가 부여되어 있다.
// A: 65, a: 97, 가: 44032
console.log('a' < 'A'); // false
console.log('가' < '바');

console.log('ace' < 'ade');
console.log('pineapple' < 'zebra');
console.log('pineapple' < 'Zebra'); // 글자 앞에서부터 차례대로 대결한 뒤 이기면 바로 끝!

/*      
    - 유니코드 체계
    영어 대문자 < 영어 소문자 < 한글

    같은 형태면 사전에서 뒤에 나오는 단어일수록 크다    
*/


