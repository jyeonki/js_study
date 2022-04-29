
// 옆으로 긴 직사각형 그리기
/*
    옆으로 긴 직사각형을 그립니다.
    한 변(1): 7
    한 변(2): 3
    단, 7 3 이라고 입력했을 때와 3 7 이라고 입력했을 때의 결과가 같아야함

    *   *   *   *   *   *   *
    *   *   *   *   *   *   *
    *   *   *   *   *   *   *
*/

/*
var star ='';

for (j=1;j<=3;j++) {
    for(i=1;i<=7;i++) {
        star += '*\t';
    }
    star += '\n';
}

console.log(star);
*/

var i = +prompt('한 변(1): ')
var j = +prompt('한 변(2): ')
var star ='';

if (i < j) {    
    var k; 
    k = i;
    i = j;
    j = k;
}    
for (var n = 1 ;n <= j; n++) {
    for(var m = 1; m <= i; m++) {
        star += '*  ';
    }
    star += '\n';
}

alert(star)
