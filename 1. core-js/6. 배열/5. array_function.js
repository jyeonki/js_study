

var foods = ['김말이', '닭꼬치','어묵', '볶음밥', '짜장면', '짬뽕'];

// indexOf(element): 배열 요소의 인덱스를 알려줌.
// var idx = foods.indexOf('볶음밥'); // lastIndex
var inx = 0;
for (var f of foods) {
    if (f === '닭꼬치') {
        break;
    }
    inx++;
}
console.log(`찾은 인덱스: ${inx}`);


console.log('===================================================');


// slice(): 배열을 부분 추출하여 사본 배열로 전환

// 2번부터 5번 미만까지 추출 (2 ~ 4)
var copyFoods = foods.slice(2, 5);
console.log(foods);
console.log(copyFoods);

// 3번부터 끝까지 추출
 var copyFoods2 = foods.slice(3);
 console.log(copyFoods2);

// 배열 전체복사
var copyFoods3 = foods.slice();
console.log(copyFoods3);


console.log('===================================================');


var nums = [10, 20, 30, 40, 50];

// reverse(): 배열을 역순으로 재배치, 원본이 변화함

var numsCopy = nums.slice();

numsCopy.reverse();

console.log(nums);
console.log(numsCopy);


// 사본 생성시 주의
var numbers = [10, 20, 30];
var numbers2 = numbers;

numbers2[1] = 999;
numbers[0] = 777;

console.log(`원본: [${numbers}]`);
console.log(`사본: [${numbers2}]`);


console.log('===================================================');


// concat(): 배열 2개를 결합한 사본을 가져옴

var arr1 = [50, 70, 100];
var arr2 = [9, 5, 1, 10, 20];

var concatCopy = arr1.concat(arr2, arr1);
console.log(concatCopy);
console.log(arr1);
console.log(arr2);


console.log('===================================================');


// includes(element): 배열에 특정 요소가 있는지 여부 확인.

var result = foods.includes('닭꼬치');
console.log(`요소 탐색 여부: ${result}`); // 논리

var result2 = foods.includes('족발') ? '^^' : 'ㅜㅜ';
console.log(result2);

if (foods.includes('짬뽕')) {
    console.log('잘먹겠습니다.');
} else {
    console.log('ㅜㅜㅜㅜㅜㅜㅜㅜㅜ');
}


console.log('===================================================');


// splice(): 배열의 특정 요소 제거

var pets = ['멍멍이', '야옹이', '짹짹이', '고란이'];

console.log(pets);

pets.splice(1, 2); // 1번 인덱스부터 두 개 지우겠다.
// pets.splice(2, 1); // 2번 인덱스를 한 개 지우겠다
console.log(pets);

// 0번 인덱스로부터 1개를 삭제하고 그 자리에 '어흥이' 삽입
pets.splice(0, 1, '어흥이');
console.log(pets);

// 1번 인덱스에 징징이 삽입
pets.splice(1, 0, '징징이');
console.log(pets);

pets.push('꽥꽥이');
console.log(pets);

// 2번부터 끝까지 삭제
pets.splice(2);
console.log(pets);