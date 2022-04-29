
/*
    Q4)
    n개의 정수와 탐색할 정수를 전달받아 
    탐색할 정수가 n개 중에 있다면 
    몇번째에 있는지 반환하고
    없다면 -1을 반환하는 함수 search()를
    작성하고 아래 그림과 같이 출력하세요.
*/

function search(numbers) {
    var answer = numbers[0];
    var idx = 0;
    for (var n of numbers) {
        if (n === answer) {
            numbers.indexOf(answer)
        } else {
            return -1;
        }
        idx++;
    }
    return idx;
}

var arr = [];

while(true) {
    var inputNum = +prompt('숫자를 입력하세요')
    while(true) {
    var searchNum = +prompt('찾을 값: ')
    if ()
    }
}



// 풀이

function search(arr, targetNum) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === targetNum) {
            return i;
        }
    }
    return -1;
}

function search2(arr, targetNum) {
    return arr.indexOf(targetNum);
}

//==========================

var numbers = [99, 33, 44, 100, 3, 67];

var result = search(numbers, 3);
console.log(`result: ${result}`);