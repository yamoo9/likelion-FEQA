import { node, bool } from 'prop-types';
import { Outlet } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import SideBar from './layout/SideBar';

function RootLayout({ /* children, */ sidebar = false }) {
  return (
    <>
      <Header />
      {/* <main>{children}</main> */}
      <main className="">
        <Outlet />
      </main>
      {sidebar && <SideBar />}
      <Footer />
    </>
  );
}

RootLayout.propTypes = {
  children: node,
  sidebar: bool,
};

export default RootLayout;
