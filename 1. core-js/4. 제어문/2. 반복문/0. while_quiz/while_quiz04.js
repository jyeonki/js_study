
var x = +prompt('양의 정수를 입력하시오.');
var mark = '';
var i = 1;
   
while (i <= x) {  
    if (i % 2 === 1) {  
        mark += '+';
        i++;
    }else {
        mark += '-';
        i++; 
    }
}
alert(mark);


// 풀이
if (x > 0) {
    var mark = '';
    var i = 1;
    while (i <= x) {
        if (i % 2 == 1) mark += '+';
        else mark += '-';
        i++;
    }
    alert(mark);
}