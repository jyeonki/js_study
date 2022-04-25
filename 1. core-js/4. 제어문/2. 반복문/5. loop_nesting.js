
var level = 2; // 단수 저장
for (var line = 1; line <= 9; line++) {
    console.log(`${level} x ${line} = ${level*line}`);
}


console.log('===================================');


// 구구단 2단부터 99단까지 출력
for (var level = 2; level <=99; level++){
    for (var line = 1; line <= 9; line++) {
        console.log(`${level} x ${line} = ${level*line}`);
    } // end inner for
    console.log('===================================');
} // end outer for


console.log('===================================');


for (var i = 1; i < 3; i++) {               // 3회 루프
    for (var j = 1; j <= 4; j++) {          // 4회 루프
        console.log(`안녕! ${i} - ${j}`);   // -> 바깥 for 1회루프에 안쪽 for 4번루프  
    }
}


console.log('===================================');


for (var i = 1; i < 3; i++) {                   // 3회 루프
    console.log('짹짹~~~');                     // 3회 실행            
    for (var j = 1; j <= 4; j++) {              // 4회 루프
        for (var k = 1; k <= 2; k++) {          // 2회 루프                       
            console.log(`안녕! ${i} - ${j}`);   // 24회 실행
        }
        console.log('메롱~~~');                 // 12회 실행
    } 
}


