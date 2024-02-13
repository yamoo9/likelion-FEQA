import { A11yHidden } from '@/components';
import { Link } from 'react-router-dom';

function GlobalNavBar() {
  return (
    <nav className=" bg-white text-slate-800 p-5 w-full shadow-md">
      <A11yHidden as="h2">글로벌 내비게이션 바</A11yHidden>
      <ul className="text-xs flex space-x-4">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/intro">소개</Link>
        </li>
      </ul>
    </nav>
  );
}

export default GlobalNavBar;
