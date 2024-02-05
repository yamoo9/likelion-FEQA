import { A11yHidden } from '@/components';
import { useState } from 'react';

// 커스텀 훅 함수
function useToggle() {}

function Exercise() {
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

export default Exercise;
