
// $$: AND 연산
// 양쪽 항 모두 참이면 연산결과가 참이다.
var t = true, f =false;

console.log(t && t); // 로그인을 생각하면 이해하기 쉽다(앞부분이 아이디, 뒷부분이 패스워드)
console.log(t && f);
console.log(f && t);// 아이디를 틀리게 쓰고, 패스워드를 맞게 썼다 -> false
console.log(f && f);


console.log('============================');

// ||: OR 연산 (shift + \)
// 양쪽 항 중에 한쪽만 참이어도 전체결과가 ||
console.log(t || t);  
console.log(t || f);
console.log(f || t);
console.log(f || f);


console.log('============================');

// !: NOT 연산 (논리 반전)
console.log(!t); // 단항연산자 NOT true

var money = 0;
if (!money) {
    console.log('돈이 없어요~');
} else {
    console.log(`돈이 ${money}원 있어요`);
}