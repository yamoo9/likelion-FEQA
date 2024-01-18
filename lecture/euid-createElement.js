// 나도 리액트처럼!!
function createElement(type, props, ...children) {
    return {
        // 리액트를 만드는 개발자용
        $$typeof: Symbol('euid.element'),
        // 리액트를 사용하는 개발자용
        type,
        props: { ...props, children }
    };
}

// 리액트 요소 === 객체 → { $$typeof: 'Symbol(euid.element)', type, props: { children } }
const myElement = createElement(
    'div', 
    { id: 'app', 'data-type': 'HTMLDivElement' },
    createElement('span', {}, 'Hello React')
);

console.log(myElement);