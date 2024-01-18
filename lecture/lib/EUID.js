// createElement 함수
// DOM 노드 : HTMLElement 반환
function createElement(type, props, ...children) {
    // type - DOM 요소 노드 생성
    const element = document.createElement(type);
    // props - 생성한 DOM 요소 노드에 속성 설정
    // ...children - 생성한 DOM 요소 노드의 자식으로 구성
    // 생성한 DOM 요소 노드 반환
    return element;
}

// createRoot 함수
// 객체 : { render, unmount }
function createRoot(domNode /* container */) {

}

// EUID 객체의 멤버로 내보내기
const EUID = Object.freeze({
    createElement,
    createRoot,
});

// 모듈 기본 내보내기
export default EUID;