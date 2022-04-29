
/*
    Q3)
    1개의 정수를 전달받아 해당 정수의 
    3제곱 값을 반환하는 함수 cube를 작성하시고

    사용자에게 숫자를 입력받은 후
    cube를 호출하여 3제곱값을 출력하세요.
*/

function cube(number) {
    var cubed = number ** 3;
    return cubed;
}

var inputNum = +prompt('숫자를 입력하세요. ');

var result = cube(inputNum);
alert(result);


// 풀이
function cube(num) { 
    return num ** 3;
}

console.log(cube(2));