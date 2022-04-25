

//횟수가 지정된 반복문은 for문이 훨씬 보기 편하다

// 구구단 5단 출력
var level = 5; // 단수

for (var n= 1; n <= 9; n++) {
    console.log(`${level} X ${n} = ${level*n}`);
}


console.log('====================================');


// 1 ~ 20사이의 정수 중 홀수만 출력

for (var m = 1; m <= 20; m+=2) {
    console.log(m);
}


for (var q = 1; q <= 20; q++) {
    if (q % 2 === 1) {
    console.log(q);
    }
}

// 1 < m < 10 이런 문법은 없다, 1 < m && m < 10 이렇게 써야한다.


console.log('====================================');


// 18과 32 사이의 3의 배수만 출력

for (var k = 18; k <= 32; k++) {
    if (k % 3 === 0) {
        console.log(k);
    }
}


console.log('====================================');


// 1 ~ 4000 사이에 있는 정수 중 12의 배수의 개수
var count = 0;

for (var z = 1; z <= 4000; z++) {
    if (z % 12 === 0) {
        count++; 
    }
}
console.log(`총 개수: ${count}개`);
