// HTML ? => Hyper Text Markup Language
// React ? => h, Hyper JavaScript Markup

// import { h } from 'https://esm.sh/vue';
import { createElement as h /* hyperscript */ } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

// 리액트 엘리먼트 생성하기
const h1Element = h(
    'h1', 
    {}, 
    '안녕!', 
    // '<br />',  // HTML 코드일 뿐. React 요소가 아님.
    h('br'),
    '리액트.'
);

const pElement = h('p', {}, '리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.');

const strongElement = h('strong', {}, 'fundamental');

const appElement = h(
    // type
    'div',
    // props
    { id: 'app' },
    // ...children
    // strong
    strongElement,
    // h1
    h1Element,
    // p
    pElement,
);

// console.log(appElement);

// 리액트 돔 객체의 렌더 메서드로 리액트 엘리먼트 DOM에 렌더링하기
const root = createRoot(document.getElementById('root'))
    
root.render(appElement);



// getOutReact__button 버튼 클릭 이벤트 핸들링

document.querySelector('.getOutReact__button')
    .addEventListener('click', () => {
        // 리액트 나가~
        root.unmount();
    })