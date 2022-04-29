
/*
    Q1)
    2개의 정수를 전달받아 그 중 작은 값을
    반환하는 함수 min2를 작성하고

    브라우저 입력을 통해 2개의 숫자를 입력받아
    함수를 통해 작은값을 출력하세요.
*/

function min2(n1, n2) {
    return(n1 < n2) ? n1 : n2;
    /*
    if (n1 < n2) {
        return n1;
    } else {
        return n2;
    }
    */
} 

// 실행부
var first = +prompt('첫번째 정수: ')
var second = +prompt('두번째 정수: ')
alert(`둘 중 작은 수: ${min2(first, second)}`);