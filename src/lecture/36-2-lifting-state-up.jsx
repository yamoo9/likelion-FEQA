import { useState } from 'react';
import { range } from '../utils';

function Son({ index }) {
  // const [state, setState] = React.useState(initialValue);

  const [showTextDecoration, setShowTextDecoration] = useState(true);

  const textDecoration = showTextDecoration ? 'underline' : 'none';
  const color = showTextDecoration ? '#dd3c87' : 'inherit';

  const handleToggleTextDecoration = () => {
    // setShowTextDecoration((s) => !s);
    setShowTextDecoration(!showTextDecoration);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleToggleTextDecoration();
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
          자식 컴포넌트 {index}
        </a>
      </h3>
    </div>
  );
}

function Parent({ start = 1, end = 3, step = 1 }) {
  return (
    <div>
      <h2>부모 컴포넌트</h2>
      <ul>
        {range(start, end, step).map((n) => {
          return (
            <li key={n}>
              <Son index={n} />
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
