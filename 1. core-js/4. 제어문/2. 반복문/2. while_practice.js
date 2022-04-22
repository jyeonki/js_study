
// 구구단 5단 출력
var level = 3; // 단수
var n= 1;
while (n <= 9) {
    console.log(`${level} X ${n} = ${level*n}`);
    n++;
}


console.log('====================================');


// 1 ~ 20사이의 정수 중 홀수만 출력
var m = 1;
while (m <= 20) {
    console.log(m);
    m += 2;
}

var q = 1;
while (q <= 20) {
    if (q % 2 === 1) {
    console.log(q);
    }
    q++;
}

// 1 < m < 10 이런 문법은 없다, 1 < m && m < 10 이렇게 써야한다.


console.log('====================================');


// 18과 32 사이의 3의 배수만 출력
var k = 18;
while (k <= 32) {
    if (k % 3 === 0) {
        console.log(k);
    }
    k++;
}


console.log('====================================');


// 1 ~ 4000 사이에 있는 정수 중 12의 배수의 개수
var count = 0;
var z = 1;
while (z <= 4000) {
    if (z % 12 === 0) {
        count++; 
    }
    z++;   
}
console.log(`총 개수: ${count}개`);


