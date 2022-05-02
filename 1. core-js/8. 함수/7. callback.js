

// n회 반복하면서 특정 일을 하는 함수
function foo(n, f) {
    for (var i = 0; i < n; i++) {
        f();
    }
}

foo(3, function() {
    console.log('안뇽?');
});

foo(4, function() {
    console.log('안녕녕~');
    console.log('메롱롱~');
});

foo(2, () => console.log('빠빠이!'));


console.log('===================================================');


// 정수 n을 전달하면 1부터 n까지의 숫자를 특정 조건에 따라 출력하는 함수

// cb(콜백함수): i의 특정 조건을 담고 있는 함수
function showNumber(n, cb) {
    for (var i = 1; i <= n; i++) {
        if (cb(i)) {
            console.log(i);
        }
        
    }
}

// 1 ~ 10까지의 3의 배수 출력
showNumber(10, function(x) {
    return x % 3 === 0;
});
showNumber(10, (x) => x % 3 === 0);

// 1 ~ 100까지의 24의 배수 출력
showNumber(100, function(m) {
    return m % 24 === 0;
});
showNumber(100, m => m % 24 === 0);

// 1 ~ 20까지 숫자 중 홀수만 출력하는데 홀수 하나 출력할 때마다 메롱이라고 출력하겠다
showNumber(20, function(j) {
    console.log('메롱');
    return j % 2 === 1;
});


console.log('===================================================');


function customFilter(arr, predicate) {
    var resultSet = []; // 필터링 후의 배열
    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            resultSet.push(arr[i]);
        }
    }
    return resultSet;
}

var numbers = [10, 30, 50, 22, 63, 250];
// var results = numbers.filter(n => n <= 50);
// var results = customFilter(numbers,function() {});
var results = customFilter(numbers, n => n <= 50);

console.log(results);