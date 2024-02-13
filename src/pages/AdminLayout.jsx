import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <>
      <h2>관리자 페이지 레이아웃</h2>
      <Outlet />
    </>
  );
}

export default AdminLayout;
