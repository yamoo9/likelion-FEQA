import React, { createElement as h } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

// 1. 데이터 분리
// 2. 데이터 공급(전달) + createApp 함수 작성
// 3. 리액트 돔 루트 리-렌더링 + render 함수 작성
// 4. 버튼으로 리-렌더링 제어 (이벤트 핸들링)
// 5. JSX 내부에서 사용되는 데이터를 끼워넣는 슬롯(slot, {})
// 6. JSX 슬롯에는 값을 끼워넣어서 마크업 구조 완성 렌더링
// 7. 그러므로 슬롯에는 꼭 `값`이 필요하다. 
//    (문은 사용할 수 없다. 이유는 함수 실행 또는 식은 값으로 처리된다.)

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
                <br />
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
            // data.greetingMessage[0].toUpperCase(),
            // JSX 내부 슬롯 {} 안에 문을 사용할 수 없음
            // - 식 : 함수 영역 안이라면 문을 끌어올려서 값을 설정해 슬롯에 삽입
            // - 함수 실행 : 문을 포함한 함수를 실행
            // if (true) {
            //     greet = data.greetingMessage[0].toUpperCase()
            // } else {
            //     greet = data.greetingMessage[0].toLowerCase()
            // },
            h('br'),
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

/* 함수 실행 => JSX -> React.createElement() -> 리액트 요소 : ReactElement */
function render(mode = 'data') {
    reactDomRoot.render(createApp(mode === 'data' ? data : anotherData));
}

render();


// 버튼 이벤트 핸들링
const button = document.querySelector('button');

// 데이터 전환을 위한 상태 변수
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