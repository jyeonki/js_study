

var scoreList = [97, 88, 100, 92, 55, 23] ;
var total = 0;

// n개 배열 인덱스의 범위: 0 ~ n-1
/*
total += scoreList(0)
total += scoreList(1)
total += scoreList(2)
total += scoreList(3)
total += scoreList(4)
total += scoreList(5)
*/


// 총점 구하기
for (var n of scoreList) {  // scoreList라는 바구니에서 0번 데이터를 n에 저장한다
    total += n;             // 1회차 loop n = 97; 2회차 loop n = 88;                         
}
/*
for (var i = 0; i < scoreList.length; i++) {
    total += scoreList[i];
}
*/


// 평균 구하기
var average = total / scoreList.length;


// 평균 반올림하기
// var prettierAvg = Math.round(average * 100) / 100;
var digit = 2;
var prettierAvg = Math.round(average * 10 ** digit) / 10 ** digit;

console.log(`총점: ${total}점, 평균: ${prettierAvg}점`);
