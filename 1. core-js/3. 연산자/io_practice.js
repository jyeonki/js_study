
var userName = prompt('당신의 이름은??');
var userAge = +prompt('당신의 나이는??');


var birthYear = 2022 - userAge + 1; 

alert(`${userName}님은 ${birthYear}년생이시군요~?`)


/* 
if (birthYear > 2022) {
    alert(`${userName}님은 미래에서 오셨군요~?`);
} else if (birthYear <= 2022) {
    alert(`${userName}님은 ${birthYear}년생이시군요~?`);
} else if (!birthYear) {
    alert(`입력을 제대로 해라 임마`);
}
*/