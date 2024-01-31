import { useState } from 'react';
import { range } from '../utils';

function Son({ index, isActive, onActive, value }) {
  // const [state, setState] = React.useState(initialValue);
  // const [showTextDecoration, setShowTextDecoration] = useState(true);
  // const handleToggleTextDecoration = () => {
  //   // setShowTextDecoration((s) => !s);
  //   setShowTextDecoration(!showTextDecoration);
  // };
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   handleToggleTextDecoration();
  // };

  const textDecoration = isActive ? 'underline' : 'none';
  const color = isActive ? '#dd3c87' : 'inherit';

  const handleClick = (e) => {
    e.preventDefault();
    // 부모에서 전달받은 부모의 상태를 업데이트 할 수 있는 함수를 여기서 실행
    onActive(index);
  };

  return (
    <div>
      <h3>
        <a
          href=""
          onClick={handleClick}
          style={{
            color,
            textDecoration,
            textUnderlineOffset: 4,
          }}
        >
          자식 컴포넌트 {value}
        </a>
      </h3>
    </div>
  );
}

function Parent({ start = 10, end = 30, step = 10 }) {
  // 어떤 상태를 가져야 what으로 제어가 가능할까? (<input type="radio" />)
  // - [ ] 사용자가 클릭한 하위 컴포넌트는 활성화가 되어야 한다.
  // - [ ] 활성화된 하위 컴포넌트의 형제 컴포넌트는 모두 비활성화 되어야 한다.

  // 선언된 상태 (리액트를 통해 UI를 제어하려고)
  const [activeIndex, updateActiveIndex] = useState(2);

  const handleChangeActiveSon = (sonIndex) => {
    updateActiveIndex(sonIndex);
  };

  return (
    <div>
      <h2>부모 컴포넌트</h2>
      <ul>
        {range(start, end, step).map((n, index) => {
          const activeSon = activeIndex === index;

          return (
            <li key={n}>
              <Son
                index={index}
                value={n}
                isActive={activeSon}
                onActive={handleChangeActiveSon}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Exercise() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default Exercise;
