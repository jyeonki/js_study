
var x = +prompt('양의 정수를 입력하세요');
var a = 1;                 // 1963
while (a <= x) {
    a1 = x %10            //3 
    b = parseInt(x / 10) //196
    b1 = b % 10          //6 
    c = parent(b / 10)   //19
    c1 = c % 10          //9
    d = parseInt(c / 10) //1
    d1=  d % 10          //1
    a++;
    alert(`${x}을(를) 거꾸로 읽으면 ${'a1'+'b1'+'c1'+'d1'}`);
}

// 문자랑 숫자의 연산은 문자로 인식




/*
if (a < 0) {
    alert('♬양의 정수만 입력해주세요.')
    alert(a)
}
a = 1963
a1 = a%10 = 3 
b = a / 10 =196
b1 = b % 10 = 6
c = b / 10 = 19
c1 = c % 10 = 9
d = c / 10 = 1
d1=  d % 10 = 1
*/

/*
    나눗셈 몫만 취하는 방법:
    27 / 5 -> 5.4
    parseInt(27 / 5) -> 5
*/


// 뒤집어야 할 정수
var targetNum = +prompt('양의 정수: ');
var tnCopy = targetNum;     //원래 숫자를 백업

// 뒤집힌 숫자를 저장할 변수
var reverseNum = '';
// var reverseNum = '' + 3 + 6 + 9 + 1; -> '3691'
while (targetNum > 0) {
    reverseNum += targetNum % 10;
    targetNum = parseIn(targetNum / 10);
}


//해설


// 뒤집어야 할 정수
var targetNum = +prompt('양의 정수: ');
var tnCopy = targetNum; //원래 숫자를 백업

if (targetNum > 0) {
    // 뒤집힌 숫자를 저장할 변수
    var reverseNum = '';

    //더 이상 나눌 수 없을 때까지 반복
    while (targetNum > 0) {
        // 10으로 나눈 나머지가 1의자리수를 의미하므로
        // 1의자리수를 reverseNum에 지속해서 연결
        reverseNum += targetNum % 10;
        // 10으로 나눈 몫을 갱신하면 1자리수씩 줄어드는
        // 효과가 되므로 자리수를 계속해서 줄여나감
        targetNum = parseInt(targetNum / 10);
    }

    alert(`${tnCopy}를 거꾸로 읽으면 ${reverseNum}입니다.`);
} else {
    alert('양의 정수만 입력해주세요.');
}
