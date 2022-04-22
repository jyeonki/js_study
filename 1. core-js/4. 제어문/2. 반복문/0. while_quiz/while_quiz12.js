
// 정수값 : 12
// 1
// 2
// 3
// 4
// 6
// 12
// 약수는 6개입니다.
// 약수는 자신을 자신밑에 숫자로 나눴을 때 나머지가 0

var a = 12;
var i =1;
var y;
while (i <= 12) {
    y
    a % i === 0;
    i++; 
}

// 풀이
var n = +prompt('정수값: ');
var i = 1;
var count = 0; //약수의 개수 저장
var message = '';
while (i <= n) {
    if (n % i === 0) {
        message += i + '\n';
        count++;
    }
    i++;
}
message += `약수의 개수는 ${count}개입니다.`;
alert(message);


