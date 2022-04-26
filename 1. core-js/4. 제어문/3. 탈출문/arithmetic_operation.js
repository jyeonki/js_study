
alert('~~~~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~~~~');
alert('[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]');

/*
//console.log(`Q${q}. ${rn1} + ${rn2} = ?? `);
var q = 1;

while(true) {
    var rn1 = Math.floor(Math.random() * 20) + 1;
    var rn2 = Math.floor(Math.random() * 20) + 1;
    var answer = +prompt(`Q${q}. ${rn1} + ${rn2} = ?? `);    

    if (answer === 0) {
        alert('게임을 종료합니다!')
        break;        
    } else if (answer === rn1 + rn2) {
        alert('정답입니다!')
    } else if (answer !== rn1 +rn2) {
        alert('틀렸어요~')
    } 
    q++;     
}
*/


/*
var q = 1;
var o = 0;
var x = 0;

while(true) {
    var rn1 = Math.floor(Math.random() * 20) + 1;
    var rn2 = Math.floor(Math.random() * 20) + 1;
    
    var answer = +prompt(`Q${q}. ${rn1} + ${rn2} = ?? `);     
    
    if (answer <= 0) {
        alert('게임을 종료합니다!')
        alert(`정답횟수: ${o}회, 틀린횟수: ${x}회`)
        break;
    }
         
    if (answer === rn1 + rn2) {
        alert('정답입니다!')
        o++;        
    } else {
        alert('틀렸어요~')
        x++; 
    }
    q++;
}
*/


/*
var q = 1;
var o = 0;
var x = 0;

while(true) {
    var rn1 = Math.floor(Math.random() * 20) + 1;
    var rn2 = Math.floor(Math.random() * 20) + 1;

    var answer = +prompt(`Q${q}. ${rn1} + ${rn2} = ?? `);    
    if (answer <= 0) {
        alert('게임을 종료합니다!')
        alert(`정답횟수: ${o}회, 틀린횟수: ${x}회`)
        break;
    }
         
    if (answer === rn1 + rn2) {
        alert('정답입니다!')
        o++;        
    } else {
        alert('틀렸어요~')
        x++; 
    }
    q++;

    rn1 = Math.floor(Math.random() * 20) + 1;
    rn2 = Math.floor(Math.random() * 20) + 1;

    if (rn1 < rn2) {
        var s = rn1;
        rn1 = rn2;
        rn2 = s;
    } else if (answer === 0) {
        continue;
    }  
    var answer = +prompt(`Q${q}. ${rn1} - ${rn2} = ?? `); 

    if (answer <= 0) {
        alert('게임을 종료합니다!');
        alert(`정답횟수: ${o}회, 틀린횟수: ${x}회`);
        break;
    }
         
    if (answer === rn1 - rn2) {
        alert('정답입니다!');
        o++;        
    } else {
        alert('틀렸어요~');
        x++; 
    }
    q++;

    rn1 = Math.floor(Math.random() * 20) + 1;
    rn2 = Math.floor(Math.random() * 20) + 1; 

    var answer = +prompt(`Q${q}. ${rn1} x ${rn2} = ?? `);  

    if (answer <= 0) {
        alert('게임을 종료합니다!');
        alert(`정답횟수: ${o}회, 틀린횟수: ${x}회`);
        break;
    }
         
    if (answer === rn1 * rn2) {
        alert('정답입니다!');
        o++;        
    } else {
        alert('틀렸어요~');
        x++; 
    }
    q++;
             
}
*/

var level = +prompt('~~~~~~~~~~~~ 난이도를 설정합니다. ~~~~~~~~~~~~\n[ 1. 상 (1~100) ㅣ 2. 중 (1~50) ㅣ 3. 하 (1~20)]');
if (level === 1) {
    var rn1 = Math.floor(Math.random() * 100) + 1;
    var rn2 = Math.floor(Math.random() * 100) + 1;
} else if (level === 2) {
    rn1 = Math.floor(Math.random() * 50) + 1;
    rn2 = Math.floor(Math.random() * 50) + 1;
} else if (level === 3) {
    rn1 = Math.floor(Math.random() * 20) + 1;
    rn2 = Math.floor(Math.random() * 20) + 1;
} else {
    count += 3;
    alert(`자동으로 상난이도입니다.`)
}

var q = 1;
var o = 0;
var x = 0;

while(true) {

    var answer = +prompt(`Q${q}. ${rn1} + ${rn2} = ?? `);    
    if (answer <= 0) {
        alert('게임을 종료합니다!')
        alert(`정답횟수: ${o}회, 틀린횟수: ${x}회`)
        break;
    }
         
    if (answer === rn1 + rn2) {
        alert('정답입니다!')
        o++;        
    } else {
        alert('틀렸어요~')
        x++; 
    }
    q++;


    if (rn1 < rn2) {
        var s = rn1;
        rn1 = rn2;
        rn2 = s;
    } else if (answer === 0) {
        continue;
    }  

    var answer = +prompt(`Q${q}. ${rn1} - ${rn2} = ?? `); 

    if (answer <= 0) {
        alert('게임을 종료합니다!');
        alert(`정답횟수: ${o}회, 틀린횟수: ${x}회`);
        break;
    }
         
    if (answer === rn1 - rn2) {
        alert('정답입니다!');
        o++;        
    } else {
        alert('틀렸어요~');
        x++; 
    }
    q++;

    
    var answer = +prompt(`Q${q}. ${rn1} x ${rn2} = ?? `);  

    if (answer <= 0) {
        alert('게임을 종료합니다!');
        alert(`정답횟수: ${o}회, 틀린횟수: ${x}회`);
        break;
    }
         
    if (answer === rn1 * rn2) {
        alert('정답입니다!');
        o++;        
    } else {
        alert('틀렸어요~');
        x++; 
    }
    q++;
             
}



// 풀이

alert('~~~~~~~~~  재미있는 사칙연산 게임 ~~~~~~~~~~\n[즐겁게 문제를 풀다가 지겨우면 0을 누르세요~]');

// 난이도 설정
var message = `~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
[1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`;
var level = +prompt(message);

var max; // 문제난이도별 최대값
if (level === 1) {
    max = 100;
} else if (level === 2) {
    max = 50;
} else if (level === 3) {
    max = 20;
} else {
    max = 999;
}

// 문제 번호
var qNum = 1;
// 정오답횟수
var correct = 0, wrong = 0;

while (true) {
    
    // 2개의 랜덤 정수
    var first = Math.floor(Math.random() * max) + 1;
    var second = Math.floor(Math.random() * max) + 1;
    
    // 실제 정답
    var realAnswer;
    // 랜덤 부호 저장
    var mark;
    // 랜덤 부호 결정 (3개 중에 하나 - 정수 3개가 랜덤)
    var markNum = Math.floor(Math.random() * 3);
    if (markNum === 0) {
        mark = '+';
        realAnswer = first + second;
    } else if (markNum === 1) {
        mark = '-';
        if (first === second) {
            continue;
        } else if (first < second) {
            var t = first;
            first = second;
            second = t;
        }
        realAnswer = first - second;
    } else {
        mark = 'x';
        realAnswer = first * second;
    }


    
    // 사용자가 입력한 답
    var userAnswer = +prompt(`Q${qNum++}. ${first} ${mark} ${second} = ??`);
  
    // 종료 조건
    if (userAnswer === 0) {
        alert(`게임을 종료합니다.\n# 정답횟수: ${correct}회, 틀린횟수: ${wrong}회`);
        break;
    }
    
    //정오답 판단
    if (realAnswer === userAnswer) {
        alert('정답입니다!');
        correct++;
    } else {
        alert('오답입니다!');
        wrong++;
    }
    
}