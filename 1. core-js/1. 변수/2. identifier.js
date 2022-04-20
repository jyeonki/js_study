
// identifier: 식별자
// - 데이터를 구분하기 위한 고유한 이름(변수, 함수...)

// 1. 식별자 이름은 대소문자를 구별한다.
var apple = '사과';
apple = '맛있는 사과';
var APPLE = '맛 더럽게 없는 사과'
var Apple = '에이쁠'

console.log(apple);
console.log(APPLE);
console.log(Apple);

// 2. 숫자로 시작하거나 숫자만으로 구성하면 안됨!
// var 000 = '구백구십구'; (X) //
// var 7lucky7 = '럭키럭키'; (X) //
var lucky7 = 777;
var a99le = '사과임~';

// 3. 특수문자는 $, _ 외 사용불가능
// var hello! = '반가워~!'; (X) //
// var hello^^ = '하잇~'; (X) //
var $bye$$ = '괜차나';
var _my_family_ = '내 가족';

// 4. 띄어쓰기 불가능
// var our vip members address = '서울시'; //

// snake case (비추) : js개발자들이 시러함
var our_vip_members_address = '서울시';

// camel case (추천)
var ourVipMembersAddress = '서울시';

// 5. 키워드(예약어)는 사용하지 말 것!
// keyword : 미리 정해져있는 기능적 단어
// var var = 11; (X)
// var if = 32; (X)
var Try = 11;

// 이름은 구체적이고 명확하고 일관성있게 지을 것!
var a = '홍길동';      // var memberName;
var z = '서울시';      // var memberAddress;
var f = 30;            // var memberAge;
var k = '19990101';    // var memberBirthDay;

alert('메롱'); // 브라우저 전용 함수, node.js 에선 안됨

// var num1 = 10;
// var num2 = 20;
var num1 = 10, num2 = 20;


















