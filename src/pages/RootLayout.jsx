import { node, bool } from 'prop-types';
import Header from './layout/Header';
import Footer from './layout/Footer';
import SideBar from './layout/SideBar';

function RootLayout({ children, sidebar = false }) {
  return (
    <>
      <Header />
      <main>{children}</main>
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
