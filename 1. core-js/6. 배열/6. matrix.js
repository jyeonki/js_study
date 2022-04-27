

// 2차원 배열 - 배열의 요소가 또다시 배열인 경우
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var arr2d = [arr1, arr2, arr3,[10, 11, 12]]; 
console.log(arr2d);
console.log(arr2d.length);  // 4
console.log('================================');
console.log(arr2d[1]);
console.log(arr2d[3]);
console.log('================================');
console.log(arr2d[0][2]);
console.log(arr2d[3][0]);
console.log('================================');
arr2d[2][1] = 88;
console.log(arr2d);

arr2d[1] = [100, 200, 300]
console.log(arr2d);

arr2d.splice(0, 1);
console.log(arr2d);

console.log('================================');

arr2d[1].splice(1,1);
console.log(arr2d);

arr2d[2].push(999);
console.log(arr2d);

console.log('================================');

var result = arr2d[0] * arr2d[2];
console.log(result);

var result2 = arr2d[0][1] * arr2d[2][0];
console.log(result2);

// arr2d[1][1].pop(); // 불가능, 배열만 pop이 가능, 이건 숫자다
// 숫자타입은 pop() 사용 불가

arr2d[2].pop();
arr2d.pop();
console.log(arr2d);


console.log('================================');


var arr2d_2 = [
    ['a', 'b', 'c'] ,
    ['가','나','다'],
    ['D', 'E', 'F']
];

//  for ~ of문은 배열의 length만큼 돈다

/*
for (var arr of arr2d_2) {
    console.log(arr);
}
*/

for (var arr of arr2d_2) {
    for(var s of arr){
        console.log('메롱');
        console.log(s);
    }
}