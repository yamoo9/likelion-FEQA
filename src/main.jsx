import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';


// HTML vs. JSX (HTML 아님, 문법은 XML과 유사)

// JavaScript는 예약어를 변수 이름 또는 함수 이름으로 사용할 수 없음
// const switch = '전환';
// const for = () => {};

// 하지만 객체의 속성으로 예약어를 사용 가능하지만 권하지는 않음
// 사용할 경우 문자 값으로 키를 설정
// const o = {
//     if: '`만약에~`',
//     'while': '`~하는 동안`'
// };

// console.log(
//     o.if, 
//     o['while'],
// );

// JSX => JSX 변환
// JSX는 JS로 변환되므로 JSX(결국은 JavaScript)에서는 `예약어`를 사용할 수 없습니다.
// class, for, if, while, switch, break, ...
// HTML 속성이 때때로 JavaScript 예약어와 겹치기 때문에 이것이 문제가 됩니다.
// <div class></div>
// <label for></label>



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

            {/* JSX는 대소문자를 구분한다. */}
            {/* JSX에서 style 속성을 설정할 때는 JavaScript 객체로 설정해야 한다. */}
            <form style={styles.form}>
                {/* JSX : for => htmlFor, class => className */}
                {/* { htmlFor: 'searchKeyword', className: 'sr-only' } */}
                {/* <label htmlFor="searchKeyword" className="sr-only">검색</label> */}
                <input
                    style={styles.input}
                    data-identity="searchKeyword"
                    type="search"
                    placeholder="검색"
                    aria-label="키워드 검색" />
            </form>
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