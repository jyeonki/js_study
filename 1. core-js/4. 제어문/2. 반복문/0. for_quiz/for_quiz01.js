
// 정사각형 그리기
/*
    정사각형을 그립니다.
    높이는 얼마입니까? 3

    *	*	*	
    *	*	*	
    *	*	*	
*/ 

var height = 3;
var star = '';

for (var i = 1; i <= height; i++) {
    for (var j = 1; j <= height; j++) {
        star += '*\t';
    }
    star += '\n';
}
console.log(star);
