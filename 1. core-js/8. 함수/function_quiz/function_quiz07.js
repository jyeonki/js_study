
/*
    Q7)
    1. n개의 정수를 전달받아 해당 정수들의
     총합과 평균 2개를 반환하는 함수 
     calcTotalAndAvg를 작성하고 결과를 출력하세요.

    - 호출 예시 : calcTotalAndAvg(10, 20, 30);

    - 출력 예시 : 전달된 숫자 총합: 60, 평균: 20
*/


// 풀이

function calcTotalAndAvg(numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    var avg = total / numbers.length;
    return {
        total: total,
        avg: avg
    };
}

// 객체 안에 property값과 value값이 같으면 한번만 써도 된다.
/*
    a {
        total: total,
        avg: avg
    }
    a {
        total,
        avg
    }
*/
