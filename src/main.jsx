import React, { createElement as h } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

const data = {
    greetingMessage: ['hello!', 'react.'],
    message: '리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.',
};

const anotherData = {
    greetingMessage: ['행복한 아침이야', '오늘도 좋은 하루 되렴~'],
    message: '나날이 성장하는 여러분을 보는 즐거움이 쏠쏠~ 😉'
}

const getGreetMessage = (condition = true) => {
    let greet = '';

    if (condition) {
        greet = data.greetingMessage[0].toUpperCase()
    } else {
        greet = data.greetingMessage[0].toLowerCase()
    }

    return greet;
}

const createApp = (data) => {

    return (
        <div id="app">
            <h1>
                {getGreetMessage()}
                {/* JSX 주석(comment) */}
                {/* <br /> */}
                {' '}
                {data.greetingMessage[1].toUpperCase()}
            </h1>
            <p>{data.message}</p>
        </div>
    );
};

const createApp2 = (data) => {
    return h(
        'div', 
        { id: 'app' }, 
        h(
            'h1', 
            {}, 
            data.greetingMessage[0].toUpperCase(),
            // h('br'),
            ' ',
            data.greetingMessage[1].toUpperCase(),
        ),
        h(
            'p',
            null,
            data.message
        )
    );
};

const rootElement = document.getElementById('root');
const reactDomRoot = createRoot(rootElement);

function render(mode = 'data') {
    reactDomRoot.render(createApp(mode === 'data' ? data : anotherData));
}

render();


const button = document.querySelector('button');

let mode = 'data'; // 'data' | 'anotherData'

const handleChangeMessage = () => {
    if (mode.includes('data')) {
        mode = 'anotherData';
    } else {
        mode = 'data';
    }

    render(mode);
};

button.addEventListener('click', handleChangeMessage);