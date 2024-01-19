import React from 'react';
import ReactDOM from 'react-dom/client';

const createApp = () => {
    return (
        <div id="app">
            <h1>안녕!<br />리액트</h1>
            <p>리액트는 오픈 소스 자바스크립트 라이브러리입니다.</p>
        </div>
    );
};

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(createApp());