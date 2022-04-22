
var n = 1; // 1. 제어변수의 선언: 시작값을 의미

while (n <= 3) { // 2. 조건식 : 끝을 의미 (괄호 안의 조건식이 true일 동안에 반복한다)
    // 반복할 코드
    console.log(`${n}번 학생 안녕하세요~`);
    n++; // 3. 증감식: 반복문의 종료시점에 도달하기 위한 코드
}
// while은 한 번이라도 코드를 실행했다면 다시 올라가서(while) 검사해야한다.

console.log('반복문 종료!');


// 5 ~ 0 카운트 다운
var m = 5;
while (m >= 0) {
    console.log(`${m}!!`);
    m--;
}


console.log('====================================');


// 1 ~ 10까지의 총합
var total = 0; // 총합을 저장할 변수
var k = 1;

while (k <= 10) {
    total += k; 
    k++;
}
console.log(`총합: ${total}`);

total += k; k++;
total += k;
total += 4;
total += 5;
total += 6;
total += 7;
total += 8;
total += 9;
total += 10;


console.log('====================================');


//' 메롱메롱'을 30번 출력하고 싶다
var x = 1;
while (x <= 30) {
    console.log('메롱메롱');
    x++;
}

