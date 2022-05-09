

// 김씨의 파일

const x = '김철수'; // 전역변수

// 함수 정의
function hello() {
    console.log('안녕 나는 철수야~');
}

// 전역변수, 함수를 외부로 내보내기
export { x, hello }