
var phone = {
    company: '삼성',
    color: '펄 화이트',
    model: '갤럭시 s21',
    price: 1200000
};

for (var prop in phone) {
    console.log(phone[prop]); // prop은 string
};


// 객체 내부의 특정키의 존재여부 확인

//var color = 'color';
//var hasKey = color in phone;   (O)

// var 메롱 = 'color';
//var hasKey = 메롱 in phone;    (O)

var hasKey = 'color' in phone; // 논리값으로 나옴
// 키를 string''으로 써줘야한다
console.log(hasKey);