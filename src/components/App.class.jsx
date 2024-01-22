import React from 'react';

// 리액트 클래스 컴포넌트 타입
// React.Component Type 1 :: class syntax

// 리액트 컴포넌트 클래스 상속(확장: 서브클래스 extends 수퍼클래스)
// 커스텀_컴포넌트 extends React.Component
// App extends React.Component

class App extends React.Component {
  render() {
    return (
      <div id="app" lang="en">
        <h1>React Application</h1>
      </div>
    );
  }
}

// 모듈 기본 내보내기
export default App;
