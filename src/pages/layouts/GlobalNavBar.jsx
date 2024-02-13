import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import S from './GlobalNavBar.module.css';
import { A11yHidden } from '@/components';
import navigationItems from '@/routes/navigation';

const assignActiveClassNames = ({ isActive }) => {
  const activeClassName = isActive ? S.active : '';
  return `${S.link} ${activeClassName}`.trim();
};

function GlobalNavBar() {
  return (
    <nav className=" bg-white text-slate-800 w-full shadow-md">
      <A11yHidden as="h2">학습 주제</A11yHidden>
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
