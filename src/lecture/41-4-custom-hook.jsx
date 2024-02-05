import { A11yHidden } from '@/components';
import { useToggle } from '@/hooks';
import { useState } from 'react';

function Exercise() {
  const [toggle, setToggle] = useToggle(true);

  const [theme, setTheme] = useState('dark');

  const handleChangeTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const isDarkTheme = theme === 'dark';

  const backgroundColor = isDarkTheme ? 'bg-stone-950' : 'bg-white';
  const forgroundColor = isDarkTheme ? 'text-white' : 'text-stone-950';

  const classNames = `${backgroundColor} ${forgroundColor} p-6 rounded border border-solid border-stone-400`;

  return (
    <>
      <div className={classNames}>
        <button type="button" onClick={handleChangeTheme}>
          {theme === 'dark' ? '라이트' : '다크'} 테마{' '}
          <A11yHidden>전환</A11yHidden>
        </button>
      </div>
      <div>
        <button type="button" onClick={setToggle}>
          {toggle ? 'true' : 'false'}
        </button>
      </div>
    </>
  );
}

export default Exercise;
