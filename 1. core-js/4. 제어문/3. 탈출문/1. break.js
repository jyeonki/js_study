

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
    // end for
}
console.log('반복문 끝!');


console.log('===================================');


for (var i = 0; i < 3; i++) {
    for(var j = 0; j < 2; j++) {
        if (i === j) {
            break;            // break 걸리면 j++도 안됨
        }
        console.log(`${i}, ${j}`);
    } // end inner for
} // end outer for


console.log('===================================');


var m = 0;
while (++m < 5) {               // 시작하자마자 ++하고 비교
    console.log(m);
    // if (m % 3 === 0) break;
}
console.log(`반복문 종료 후 m: ${m}`);

var m = 0;
while (m++ < 5) {               // 시작하자마자 비교하고 ++ 
    console.log(m);
    // if (m % 3 === 0) break;
}
console.log(`반복문 종료 후 m: ${m}`);