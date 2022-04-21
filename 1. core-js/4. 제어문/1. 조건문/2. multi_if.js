
var age = 14;

if (age >= 20) {
    console.log('성인입니다.');
} else if (age >= 17) {
    console.log('고딩입니다.');
} else if (age >= 14) {
    console.log('중딩입니다.');
} else if (age >= 8) {
    console.log('초딩입니다.');
} else {
    console.log('아동입니다.');
}
// else if 차례대로 검사하면서 내려간다, true가 나오면 밑에 식은 확인하지 않는다
// else if 대신 if로 다 쓰면 true값이 나와도 밑에 남은 if를 다 검사한다