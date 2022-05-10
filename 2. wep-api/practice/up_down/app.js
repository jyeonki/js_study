//=============== 전역변수, 함수 정의부분 =============//

// 게임진행에 필요한 데이터
// (실제정답, 선택한숫자, 최소값, 최대값)
const gameData = {
    secret: Math.floor(Math.random() * 100) + 1,
    answer: null,
    min: 1,
    max: 100
};


// 숫자 아이콘 생성 함수
function makeIcons() {

    const $numbers = document.getElementById('numbers');

    //가상의 태그
    const $virtual = document.createDocumentFragment();

    for (let i = 1; i <= 100; i++) {
        const $newDiv = document.createElement('div');
        $newDiv.textContent = i;
        $newDiv.classList.add('icon');

        $virtual.appendChild($newDiv);
    }
    $numbers.appendChild($virtual);
}

// UP, DOWN일 경우 해야할 일 정의
// parameter 1: isUp - UP인경우 true, DOWN인 경우 false
// parameter 2: target - 클릭된 요소 노드
function processUpDownCase(isUp, target) {
    const CLASS_NAME = 'selected';
    const [$up, $down] = [...document.querySelector('.result').children]
    if (isUp) {
        $down.classList.remove(CLASS_NAME);
        $up.classList.add(CLASS_NAME);
        gameData.min = gameData.answer + 1;
        document.getElementById('begin').textContent = gameData.min;
    } else {
        $up.classList.remove(CLASS_NAME);
        $down.classList.add(CLASS_NAME);
        gameData.max = gameData.answer - 1;
        document.getElementById('end').textContent = gameData.max;
    }

    // 아이콘 제거 함수 호출
    clearIcons(isUp, target);
}

// 클릭한 아이콘을 기준으로 범위밖의 아이콘을 제거하는 함수
function clearIcons(isUp, target) {
    const $numbers = document.getElementById('numbers');

    let $delTarget = target;
    while($delTarget) {
        let $nextTarget = 
            isUp ? 
            $delTarget.previousElementSibling 
            : $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    }
}


// 정답을 맞출 경우 해야할 일
function processCorrectCase(target) {
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');

    // 정답 div.icon에 id=move 추가
    target.setAttribute('id', 'move');
}

// 사용자가 선택한 숫자를 실제정답과 비교해서 결과를 처리하는 함수
function compareAnswer(target) {
    
    if (gameData.answer === gameData.secret) {
        //정답인 경우
        processCorrectCase(target);
    } else if (gameData.answer < gameData.secret) {
        //UP인 경우
        processUpDownCase(true, target);
    } else {
        //DOWN인 경우
        processUpDownCase(false, target);
    }
}


//=============== 메인 코드 실행부분 ===============//
(function() {

    // 100개의 아이콘 생성하여 배치
    makeIcons();

    // 아이콘 클릭 이벤트 부여
    const $numbers = document.getElementById('numbers');
    $numbers.addEventListener('click', e => {

        //만약에 아이콘을 클릭하지 않았다면 나가!
        if (!e.target.matches('#numbers > .icon')) return;

        // 사용자가 선택한 숫자가 무엇인가???
        // console.log(e.target.textContent);
        gameData.answer = +e.target.textContent;
        // console.log(gameData);

        // 정답 검증하는 함수 호출
        compareAnswer(e.target);
    });

})();



/*

# 시나리오

- 사용자는 100개의 아이콘 중 한 개를 클릭한다.
- 시스템은 정답데이터(1~100사이의 랜덤정수)와 
  클릭한 아이콘의 숫자데이터를 비교한다.
- 시스템은 비교결과를 판단하여 UP인경우 DOWN인 경우 그리고 정답인 경우에 따른 효과를 렌더링한다.
- 사용자는 지속적으로 정답을 맞출 때 까지 위의 행위를 반복한다.

===============================

# 세부 시나리오

1. 100개의 아이콘에는 클릭 이벤트가 부여되어야 한다
2-1. UP인 경우
=> up아이콘의 애니메이션을 발동시킨다.
=> 해당 범위에 벗어난 아이콘을 제거한다.
=> h2태그의 최소값을 수정한다.

2-2. down인 경우
=> down아이콘의 애니메이션을 발동시킨다.
=> 해당 범위에 벗어난 아이콘을 제거한다.
=> h2태그의 최대값을 수정한다.

2-3. 정답인 경우
=> finish박스의 애니메이션을 발동시킨다.

===============================

# 필요한데이터

 1-100사의 랜덤정수(고정값),
 사용자가 클릭한 아이콘의 숫자,
 최소값을 저장할 변수, 최대값을 저장할 변수



*/


// 정답 검증
       
// const $result = document.querySelector('aside');
// const $resultDiv = [...$result.children];

// if (gameData.secret === gameData.answer) {
//     const $finish = document.getElementById('finish');
//     $finish.classList.add('show');
// } else if (gameData.secret > gameData.answer) {
    
//     // selected 탐색 후 삭제
//     for (let $divList of $resultDiv) {
//         if ($divList.classList.contains('selected')) {
//             $divList.classList.remove('selected');
//             break;
//         }
//     }
//     // up 애니메이션 적용
//     const $up = document.getElementById('up');
//     $up.classList.add('selected')

//     // 해당 범위에 벗어난 아이콘 제거                        
//     for(let iNum = 0; iNum < $numbers.children.length; iNum++) {
        
//         if(($numbers.children[iNum].textContent) < gameData.answer){
//             $numbers.children[iNum].style.display= 'none';
//         }
//     }
//     /*
//     for (let iNum = 0; iNum < gameData.answer; iNum++) {
        
//         if(($numbers.children[iNum].textContent) < gameData.answer){
//             $numbers.removeChild($numbers.children[iNum]);
//         }
//     }
//     */
//     /*
//     const $icon = [...$numbers.children];
//     console.log($icon.length);
//     for(let iNum = 0; iNum < $icon.length; iNum++) {
        
//         if(parseInt($icon[iNum].textContent) <= gameData.answer){
//             $icon[iNum].style.display= 'none';
//         }
//     }
//     */

//     // h2 최소값 수정
//     const $begin = document.getElementById('begin')
//     $begin.textContent = e.target.textContent

// } else if (gameData.secret < gameData.answer) {
    
//     // selected 탐색 후 삭제
//     for (let $divList of $resultDiv) {
//         if ($divList.classList.contains('selected')) {
//             $divList.classList.remove('selected');
//             break;
//         }
//     }

//     // down 애니메이션 적용
//     const $down = document.getElementById('down');
//     $down.classList.add('selected')

//     // 해당 범위에 벗어난 아이콘 제거            
//     for(let iNum = 0; iNum < $numbers.children.length; iNum++) {
        
//         if(parseInt($numbers.children[iNum].textContent) > gameData.answer){
//             $numbers.children[iNum].style.display= 'none';
//         }
//     }
//     /*
//     for(let iNum = 0; iNum < $numbers.children.length; iNum++) {
        
//         if(($numbers.children[iNum].textContent) > gameData.answer){
//             $numbers.removeChild($numbers.children[iNum]);
//         }
//     }
//     */
//     // h2 최대값 수정
//     const $end = document.getElementById('end')
//     $end.textContent = e.target.textContent
// }