import { bool, node } from 'prop-types';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import { A11yHidden, Loading, SkipToContent } from '@/components';

import GlobalNavBar from './GlobalNavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import Header from './Header';

function RootLayout({ sidebar = false }) {
  const { state } = useNavigation();
  // console.log(state); // 'idle' | 'loading'

  return (
    <>
      <SkipToContent
        href="#main-spot"
        className="!fixed top-4 left-4 bg-white/40 py-2 px-4 backdrop-blur-sm shadow-sm focus:outline-none ring-2 ring-indigo-300 rounded-sm text-xs"
      >
        메인으로 이동
      </SkipToContent>
      <Header />
      <GlobalNavBar />
      <main className="w-full">
        <A11yHidden id="main-spot">메인</A11yHidden>
        {state === 'loading' ? <Loading /> : <Outlet />}
      </main>
      {sidebar && <SideBar />}
      <Footer />
      <ScrollRestoration />
    </>
  );
}

RootLayout.propTypes = {
  children: node,
  sidebar: bool,
};

export default RootLayout;
