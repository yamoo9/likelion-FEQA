import { node, bool } from 'prop-types';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import GlobalNavBar from './GlobalNavBar';

function RootLayout({ sidebar = false }) {
  return (
    <>
      <Header />
      <GlobalNavBar />
      <main className="w-full">
        <Outlet />
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
