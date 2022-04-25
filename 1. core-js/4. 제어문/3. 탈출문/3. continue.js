
for (var i = 1; i <= 10; i++) {
    if (i === 5) continue;      // skip
    console.log(i);
}

for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;      // skip
    console.log(i);
}

while (true) {
    var n = +prompt('숫자를 입력!')
    if (n === 0) {
        break;
    } else if (n === 1) {
        continue;             // continue는 윗 회차로 올라간다
    }
    alert('메롱~~~')
}
alert('끝났지롱~~')