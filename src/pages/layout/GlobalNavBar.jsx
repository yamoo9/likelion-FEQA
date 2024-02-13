import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import S from './GlobalNavBar.module.css';
import { A11yHidden } from '@/components';

const navigationItems = [
  {
    id: 'home',
    path: '/',
    text: '홈',
  },
  {
    id: 'intro',
    path: '/intro',
    text: '소개',
  },
  {
    id: 'products',
    path: '/products',
    text: '상품',
  },
];

const assignActiveClassNames = ({ isActive }) => {
  const activeClassName = isActive ? S.active : '';
  return `${S.link} ${activeClassName}`.trim();
};

function GlobalNavBar() {
  return (
    <nav className=" bg-white text-slate-800 p-5 w-full shadow-md">
      <A11yHidden as="h2">글로벌 내비게이션 바</A11yHidden>
      <ul className="text-xs flex">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <NavLink to={item.path} className={assignActiveClassNames}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default memo(GlobalNavBar);
