import { A11yHidden } from '@/components';
import { useToggle, useKey, useMousePosition } from '@/hooks';
import { useState } from 'react';

function Exercise() {
  return (
    <>
      <ThemeButtonPlayground />
      <ToggleButtonPlayground />
      <MousePositionPlayground />
    </>
  );
}

function ThemeButtonPlayground() {
  const [theme, setTheme] = useState('dark');

  const handleChangeTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const isDarkTheme = theme === 'dark';

  const backgroundColor = isDarkTheme ? 'bg-stone-950' : 'bg-white';
  const forgroundColor = isDarkTheme ? 'text-white' : 'text-stone-950';

  const classNames = `${backgroundColor} ${forgroundColor} p-6 rounded border border-solid border-stone-400`;

  return (
    <div className={classNames}>
      <button type="button" onClick={handleChangeTheme}>
        {theme === 'dark' ? '라이트' : '다크'} 테마{' '}
        <A11yHidden>전환</A11yHidden>
      </button>
    </div>
  );
}

function ToggleButtonPlayground() {
  // const [isVisible, setToggle] = useToggle();
  const { value: isVisible, on, off } = useToggle();

  useKey('escape', off);

  return (
    <div>
      <button type="button" onClick={on}>
        박스 {isVisible ? '감춤' : '표시'}
      </button>
      {isVisible && (
        <>
          <p className="p-5 border border-stone-500 text-stone-700">
            현재 박스의 표시 상태는 {isVisible ? '표시' : '감춤'} 입니다.
          </p>
          <button type="button" onClick={off} aria-label="박스 감춤">
            ×
          </button>
        </>
      )}
    </div>
  );
}

function MousePositionPlayground() {
  const [x, y] = useMousePosition();

  return (
    <div>
      x: {x} / y: {y}
    </div>
  );
}

export default Exercise;
