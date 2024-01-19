import { createElement as h, createRoot } from "../library/EUID.js";

const appElement = h(
    'div', 
    {
        id: 'app',
        'data-type': 'application'
    }, 
    h(
        'h1', 
        {}, 
        '안녕!', 
        h('br'), 
        '리액트.'
    ),
    h(
        'p',
        { 'data-id': 'slogan' },
        '리액트는....'
    ),
);


const root = createRoot(document.getElementById('root')); // { render, unmount }

// root === undefined
// ERROR: Cannot read properties of undefined (reading 'render')
root.render(appElement);


// 버튼 요소 클릭 이벤트 핸들링
// BEM 표기법
const getOutButton = document.querySelector('.getOutReact__button');

getOutButton.addEventListener('click', () => {
    root.unmount();
});
