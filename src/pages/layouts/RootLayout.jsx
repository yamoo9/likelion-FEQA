import { bool, node } from 'prop-types';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import { Loading } from '@/components';

import GlobalNavBar from './GlobalNavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import Header from './Header';

function RootLayout({ sidebar = false }) {
  const { state } = useNavigation();
  // console.log(state); // 'idle' | 'loading'

  return (
    <>
      <Header />
      <GlobalNavBar />
      <main className="w-full">
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
