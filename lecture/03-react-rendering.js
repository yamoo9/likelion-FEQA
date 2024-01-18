// React 모듈 불러오기
import React from 'https://esm.sh/react';
// ReactDOM 모듈 불러오기
import ReactDOM from 'https://esm.sh/react-dom';


// 리액트 요소 생성
// <h1>리액트</h1>
// <p>리액트는 가장 인기있는 프론트엔드 개발 도구입니다.</p>
// React API
const h1Element = React.createElement(
    // type, // 요소 이름(문자)
    'h1',
    // props, // 속성 집합(객체)
    {},
    // ...children // 중첩된 요소 또는 텍스트
    '리액트'
);

const pElement = React.createElement(
    'p',
    {},
    '리액트는 UI 구축을 위한 자바스크립트 라이브러리입니다.'
);

// 리액트가 하는 일은 리액트 엘리먼트를 생성하는 것이다.
// 리액트 엘리먼트를 화면(DOM)에 렌더링하려면 "리액트 DOM"이 필요하다.

// ReactDOM API
// ReactDOM.createRoot(domNode) // 실제 DOM에 위치한 #root 요소
const reactDomRoot = ReactDOM.createRoot(
    document.getElementById('root')
);

// console.log(reactDomRoot); 
// 리액트 DOM 루트 객체 생성 { render, unmount }

// 리액트 엘리먼트를 리액트 돔의 렌더 능력으로 화면(DOM)에 그린다.
reactDomRoot.render(h1Element);