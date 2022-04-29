
// 객체 생성: 객체 리터럴
var dog = {
    name: '뽀삐',
    kind: '진돗개',
    age: 3,
    injection: true,
    favorite: ['산책', '개껌']
};

var cat = {
    name: '콩순이',
    kind: '블랙러시안',
    age: 2,
    injection: false,
    favorite: ['낮잠', '츄르', '캣타워']
};

console.log(typeof dog);


// 객체에 저장된 값 참조
console.log(dog.name);
console.log(cat.name);
console.log(cat.age);

console.log(cat.favorite);
console.log(cat.favorite[0]);

dog.favorite.push('꼬리흔들기');
console.log(dog);

// cat.splice(1, 1) (X)
cat.favorite.splice(0, 1);
console.log(cat);


// 프로퍼티 참조 2
console.log('==========================');


console.log(dog.injection);
console.log(dog['injection']); // 두개는 같다, 대괄호[]를 쓰려면 string''을 같이 써야한다


console.log('==========================');


var x = 'age';
console.log(cat[x]); // 대괄호[]안에 변수를 쓸 수 있다
// console.log(cat.x); (X)

var arr = [1, 3, 5, 7];
var n = 2;
console.log(arr[2]); // 두 개는 같다
console.log(arr[n]); 


console.log('==========================');


// 프로퍼티 값 수정
dog.age = 5;
console.log(dog);

dog.favorite[1] = '아이들';
console.log(dog);


// 새로운 프로퍼티 동적 추가(실행중 추가)
cat.master = '김철수';
console.log(cat);


// 프로퍼티 동적 제거
delete cat.master;
console.log(cat);


// 빈 객체 만들기
var obj = {};