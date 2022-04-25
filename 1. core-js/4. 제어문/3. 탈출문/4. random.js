
// 난수(랜덤값) 생성
// Math.random() : 0과 1사이 - 0.0이상 1.0미만

var rn = Math.random();
console.log(`랜덤값: ${rn}`);

if (rn > 0.66) {
    console.log('오늘 저녁은 삼겹살');
} else if (rn > 0.33) {
    console.log('오늘 저녁은 샐러드');
} else {
    console.log('오늘 저녁은 아리수');
}


console.log('===================================');


// 내림, 올림, 반올림
console.log(Math.floor(3.789)); // 내림
console.log(Math.ceil(5.289));  // 올림
console.log(Math.round(7.2));   // 반올림

/*
    # 1이상 10이하의 랜덤 정수 생성

    Math.random()                               -> 0.0 <= ~ <  1.0
    Math.random() * 10                          -> 0.0 <= ~ < 10.0
    Math.floor(Math.random() * 10)              ->  0  <= ~ <  10
    Math.floor(Math.random() * 10) + 1          ->  1  <= ~ <  11
*/ 
console.log('===================================');


var ri = Math.floor(Math.random() * 10) + 1;
console.log(`랜덤 정수: ${ri}`);

// 117 ~ 163 사이의 랜덤 정수
var i = Math.floor(Math.random() * 47)+ 117;

/*
    # 랜덤 정수 범위 공식
    
    - x이상 y이하의 랜덤 정수

    - Math.floor(Math.random() * (y - x + 1) + x)
*/

