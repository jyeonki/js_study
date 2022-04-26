
/*
    콘솔창에 배열의 요소들을 순회하여
    -----
    월요일
    화요일
    ...
    일요일
    -----
    을 출력하세요 (for-of문, for문 둘다 만들어보세요)
*/ 

var dayOfWeeks = ['월', '화', '수', '목', '금', '토', '일']
var total = '';

/*
for (var n of dayOfWeeks) {
    total += n + '요일' + '\n';
}
console.log(total);
*/
/*
for (i = 0; i < dayOfWeeks.length; i++) {
    total += dayOfWeeks[i] + '요일' + '\n';
}
console.log(total);
*/


console.log('=========================================');


// 풀이
for (var day of dayOfWeeks) {
    console.log(`${day}요일`);
}


for (i = 0; i < dayOfWeeks.length; i++) {
    console.log(`${dayOfWeeks[i]}요일`);
}


console.log('=========================================');
console.log('=========================================');


/*
    배열의 요소들을 순회하여
    - 짜장면과 짬뽕과 볶음밥과 마라탕과 탕수육!!
    이라는 문장을 완성해서 출력하세요.
*/

var foods = ['짜장면', '짬뽕', '볶음밥', '마라탕', '탕수육']
var message = '';

/*
for (i = 0; i < foods.length; i++) {
    if (i === foods.length - 1) {
        message += foods[i] + '!!'
        break;
    }
    message += foods[i] + '과 '; 
}   
console.log(message);
*/


console.log('=========================================');


// 풀이
for (i = 0; i < foods.length; i++) {
    if (i === foods.length - 1) {
        message += `${foods[i]}!!`;
    } else {
        message += `${foods[i]}과 `; 
    }
}   
console.log(message);