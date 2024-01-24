import React from 'react';
import './24-fragment.css';

// 리액트 <React.Fragment> === 웹 표준 <template>

function Exercise() {
  // ❌ 이 코드는 문법 오류 문제가 있습니다.
  //  return <div>one</div><div>two</div>;

  // ❌ 이렇게 해석되기 때문입니다.
  // return React.createElement(/* type */'div', /* props */{})React.createElement(/* type */'div', /* props */{})

  // ☢️ 단순히 감쌀 목적(리액트의 오류 해결)으로 <div>로 감싼 경우 !!!!!
  // return (
  //   <div>
  //     <div>one</div>
  //     <div>two</div>
  //   </div>
  // );

  // ✅ 배열로 감쌀 경우, 문법상 문제가 없기 때문에 유효합니다.
  // return [
  //   React.createElement(/* type */ 'div', /* props */ {}, 'one'),
  //   React.createElement(/* type */ 'div', /* props */ {}, 'two'),
  // ];

  // ✅ 리액트 프래그먼트를 사용하는 것이 공식적인 유효 방법입니다. (권장)
  return (
    // <React.Fragment>
    <>
      <div>one</div>
      <div>two</div>
    </>
    // </React.Fragment>
  );
}

// Fragment 컴포넌트 검토
const compiledCode = React.createElement(
  React.Fragment,
  {},
  React.createElement('div', {}, 'one'),
  React.createElement('div', {}, 'two')
);

console.log(compiledCode);

export default Exercise;
