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
                {/* 해킹이 아니라, 명시적으로 JSX 구문에서 공백을 설정하는 방법 */}
                {' '}
                {/* <br /> */}
                {data.greetingMessage[1].toUpperCase()}
            </h1>
            <p>{data.message}</p>
        </div>
    );
};

const rootElement = document.getElementById('root');
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(createApp(data));