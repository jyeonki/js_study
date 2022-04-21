
var greeting;
greeting = 'hello';
greeting = "안녕하세요";
greeting = `콘니치와`; // 왼쪽은 무조건 변수, 변수에 '' 넣으면 안됨

console.log(typeof greeting);

// var str1 = "그는 나에게 "메롱"이라고 하고 도망갔다."; //
var str1 = '그는 나에게 "메롱"이라고 하고 도망갔다.';
console.log(str1);

var str2 = "Let's Go!";
console.log(str2);

var str3 = "Let's Go! \"together\""; 
console.log(str3);

// 경로표시: 리눅스- /, 윈도우- \
// var str4 = 'E:\temp\new.png'; // \t: tab, \n: new line
var str4 = 'E:\\temp\\new.png';
console.log(str4);

var str5 = '멍멍이\n\n\n\n야옹이';
console.log(str5);

var str6 = '멍멍이\t\t\t야옹이';
console.log(str6);

var ex1 = '100' // ''안에 감싸져 있으니까 숫자가 아닌 문자!!

// '\n' 줄바꿈 문자, 문자이므로 ''안에 넣어서 써야한다



// 템플릿 리터럴 (ES6+ 문법)
var tag = '<ul>\n\t<li>\n\t\t<a href="#">목록1</a>\n\t</li>\n</ul>';
console.log(tag);

var template = `
<ul>
    <li>
        <a href="#"목록1</a>
    <li>
<ul>`; // `백틱 써야함
console.log(template);

// 이름이랑 영어점수를 같이 쓰고 싶을 때
// 학생이 여러명 일 경우..

var studentName = '박영희';
var engScore = '94'

console.log(studentName + '님의 영어점수는 ' + engScore + '점입니다.');

// console.log('${}님의 영어점수는 ${}점입니다.');
console.log(`${studentName}님의 영어점수는 ${engScore}점입니다.`); // `백틱 써야함(템플릿 리터럴), 