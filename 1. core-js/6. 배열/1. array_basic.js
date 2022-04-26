
// 배열 생성
// 배열 변수 이름 관례: 복수형(-s), -List
var fruits = ['사과', '포도', '오렌지', '복숭아', '자몽'];

console.log(`배열의 길이: ${fruits.length}개`);

// 요소(element): 배열에 저장된 하나하나의 데이터
// 배열의 요소를 참조: 배열에서 데이터를 꺼내쓰겠다.
console.log(fruits[2]);
console.log(`${fruits[4]} 맛있어~~`);

var favorite = fruits[1];
console.log(`제일 좋아하는 과일: ${favorite}`);

// 배열 요소 수정
fruits[3] = '파인애플'; // 복숭아 -> 파인애플 수정
console.log(fruits);

// 배열 내부 데이터 전체 순회 (반복문 처리)

console.log('=============================');

for (var i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i]} 맛있어요~`);
}