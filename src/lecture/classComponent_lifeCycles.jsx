import React from 'react';

class LifeCycles extends React.Component {
  constructor(props) {
    super(props);

    // 상태는 여기서만 관리
    this.state = {
      username: '',
      email: '',
      isAllChecked: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {}; // state 병합
  }

  shouldComponentUpdate() {
    return true; // false
  }

  render() {
    return <div>{/* JSX */}</div>;
  }

  // 종속성 배열 []
  // 최초 1회 마운트 될 때 상태는 여기서만 관리
  componentDidMount() {
    console.log('side effect, dom commited');
    // 이벤트 구독
  }

  // 업데이트 될 때 마다 상태는 여기서만 관리
  componentDidUpdate() {
    // if (stateA === ????) {

    // }
    // if (stateB === ????) {

    // }
    // if (stateC === ????) {

    // }

    console.log('side effect, re-rendered');
  }

  // 클린업
  // 정리를 위한 상태는 여기서 관리
  componentWillUnmount() {
    console.log('side effect, will unmount');
    // 이벤트 구독 취소
  }
}

export default LifeCycles;
