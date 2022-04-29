
var x = +prompt('양의 정수를 입력하시오.');
var star = '';
var i = 1;

if (x > 0) {
    var star = '';
    var i = 1;
    while (i <= x) {
    star += '*\n'; // \n도 문자이므로 ''안에 넣어야한다.
    i++;
    }
    alert(star);
}
