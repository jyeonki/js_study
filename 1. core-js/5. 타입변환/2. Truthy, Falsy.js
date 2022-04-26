

// Falsy 
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ('') console.log('ok4');
if (NaN) console.log('ok5');

console.log('========================');

//Truthy
if (1) console.log('ok6');
if (-77.999) console.log('ok7');
if ('메롱') console.log('ok8');
if ('  ') console.log('ok9');
if ([1,2,3]) console.log('ok10');
if ([]) console.log('ok11');

console.log('======================');

var num = 7;
if (num % 2) {
    console.log('홀수입니다');
} else {
    console.log('짝수입니다');
}

console.log('========================');

var apple = 0;

if (apple) {
    console.log(`사과가 ${apple}개 있습니다.`);
} else {
    console.log('사과가 하나도 없습니다.');
}

var apple = 10;

if (apple) {
    console.log(`사과가 ${apple}개 있습니다.`);
} else {
    console.log('사과가 하나도 없습니다.');
}


var result;

if (result) {               // undefined
    console.log('안녕!');
}


/*
var n = 99;

while (n) {  // while (99) -> while (true)
    // 무한루프
}
*/