
/*
    학생 수 입력
    점수 입력
*/ 

var studentN = +prompt('학생 수를 입력해주세요.\n♬1 ~ 80 사이로 입력해주세요.')
alert(`${studentN}명의 점수를 입력해주세요.`)
var score = [];
var sNumber = 1;

while(true) {
    n = +prompt(`${sNumber}번: `);
    score.push(n)
    if (score.length === studentN) {
        break;
    }
    sNumber++;
} alert(score);






var graph = [0,0,0,0,0,0,0,0,0,0,0]; // 11칸
var m = 1;


for (var i = 0; i < score.length; i++) {
    if (parseInt(score[i] / 10) === 0){
        graph.splice(0,1,m);
        m++;            
    } else if (parseInt(score[i] / 10) === 1){        
        graph.splice(1,1,m);
        
    } else if (parseInt(score[i] / 10) === 2){        
        graph.splice(2,1,m);
        
    } else if (parseInt(score[i] / 10) === 3){        
        graph.splice(3,1,m);
        
    } else if (parseInt(score[i] / 10) === 4){        
        graph.splice(4,1,m);
        
    } else if (parseInt(score[i] / 10) === 5){        
        graph.splice(5,1,m);
        
    } else if (parseInt(score[i] / 10) === 6){        
        graph.splice(6,1,m);
        
    } else if (parseInt(score[i] / 10) === 7){        
        graph.splice(7,1,m);
        
    } else if (parseInt(score[i] / 10) === 8){        
        graph.splice(8,1,m);
        
    } else if (parseInt(score[i] / 10) === 9){        
        graph.splice(9,1,m);
        
    } else if (parseInt(score[i] / 10) === 10){        
        graph.splice(10,1,m);
        
    } 

}
alert(graph);

/*
0-9
10-19
20-29
30-39
40-49
50-59
60-69
70-79
80-89
90-99
100


*/




// 풀이

//학생 수 입력 받기
var stuNum;
while (true) {
    stuNum = +prompt(`학생 수를 입력해주세요.`);
    if (stuNum >= 1 && stuNum <= 80) {
        break;
    }
    alert('1~80 사이의 숫자를 입력하세요.');
}

alert(`${stuNum}명의 점수를 입력해주세요`);

//학생 점수 배열
var scoreList = [];
//분포 배열
var distributions = [0,0,0,0,0,0,0,0,0,0,0];

var num = 1; //학생번호

//학생들 점수 입력받기
while (scoreList.length < stuNum) {
    var score = +prompt(`${num}번: `);

    //입력점수 검증
    if (score < 0 || score > 100) {
        alert('0 ~ 100점 사이로 입력하세요!');
        continue;
    }
    scoreList.push(score);
    num++;
}



//분포 배열 완성하기 [0,0,2,1,0,1,0,1,1,2,2]
// scoreList[0] : 23 -> distributions[2]++ -> distributions[23/10]++
// scoreList[1] : 55 -> distributions[5]++ -> distributions[55/10]++
// scoreList[2] : 100 -> distributions[10]++ -> distributions[100/10]++
// scoreList[3] : 100 -> distributions[10]++

for (var i = 0; i < scoreList.length; i++) {
    distributions[parseInt(scoreList[i]/10)]++;
}
//[0,0,2,1,0,1,0,1,1,2,2]
// console.log(distributions);

var star = '';
for (var i=0; i< distributions.length; i++) {
    
    if (i < distributions.length - 1) { 
        star += `${i*10} ~ ${i*10+9} : `;
    } else {
        star += `100 : `;
    }
    for (var j=0; j < distributions[i]; j++) {
        star += '*';
    }
    star += '\n';
}
alert(star);










