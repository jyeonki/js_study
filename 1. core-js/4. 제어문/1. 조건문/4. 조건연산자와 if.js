

var money = 5000;
// 돈이 5천원 이상이면 '김치찌개' 저장 아니면 '라면' 저장
/*
var food ;
if (money >= 5000) {
    food = '김치찌개';
} else {
    food = '라면';
}
*/


// var food = money >= 5000 ? '김치찌개' : '라면';

// 5천원 넘으면 '김치찌개', 3천원 넘으면 '라면', 그 밑이면 '굶음'

/*
var food = (money >= 5000)
         ? '김치찌개'
         : (money >= 3000) ? '김치찌개' : '라면';
*/       
            
var food;
if (money >= 5000) {
    food = '김치찌개';
} else if (money >= 3000) {
    food = '라면';
} else {
    food = '굶음';
}