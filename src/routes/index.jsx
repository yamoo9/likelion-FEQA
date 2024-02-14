import { createBrowserRouter } from 'react-router-dom';

// 레이아웃(Layouts)
import RootLayout from '@/pages/layouts/RootLayout';

// 페이지(Pages)
import NotFound from '@/pages/NotFound';

// 내비게이션(Navigation)
import navigationItems from './navigation';

// 루트 구성(routes configuration)
const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: navigationItems,
  },
];

const options = {
  // basename: '/euid'
};

// 라우터 인스턴스 생성
let router = createBrowserRouter(routes, options);

// JSX 라우터 구성 + 라우터 인스턴스 생성
// router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
//       <Route path="" element={<HomePage />} />
//       <Route path="intro" element={<IntroPage />} />
//       <Route
//         path="non-block-ui-with-updating-state"
//         element={<NonBlockUIPage />}
//       />
//       <Route path="/admin" element={<AdminLayout />}>
//         {/* .... */}
//       </Route>
//     </Route>
//   )
// );

// 라우터 인스턴스 기본 내보내기
export default router;
