import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

const data = {
    greetingMessage: ['hello!', 'react.'],
    message: '리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.',
};

const createApp = (data) => {

    return (
        <div id="app">
            <h1>
                {data.greetingMessage[0].toUpperCase()}
                <br />
                {data.greetingMessage[1].toUpperCase()}
            </h1>
            <p>{data.message}</p>
        </div>
    );
};

// JSX에서 style 속성을 설정할 때는 JavaScript 객체로 설정해야 한다.
const styles = {
    form: {
        'margin-block': '8px', 
        'border-radius': '4px', 
        'padding': '16px', 
        'background-color': '#f0f6f8',
    },
    input: {
        'padding': '4px 6px', 
        'color': '#3d3b3f',
    },
};

const rootElement = document.getElementById('root');
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(createApp(data));