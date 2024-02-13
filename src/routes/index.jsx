import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// Layouts
import RootLayout from '@/pages/RootLayout';
import AdminLayout from '@/pages/AdminLayout';

// Pages
import HomePage from '@/pages/Home';
import IntroPage from '@/pages/Intro';

// 루트 구성(routes configuration)
const routes = [
  // route config object
  // { path, element, ... }
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/intro',
        element: <IntroPage />,
      },
    ],
  },
];

const options = {
  // basename: '/euid'
};

// 라우터 인스턴스 생성
let router = createBrowserRouter(routes, options);

// JSX 라우터 구성 + 라우터 인스턴스 생성
router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<HomePage />} />
      <Route path="intro" element={<IntroPage />} />
      <Route path="/admin" element={<AdminLayout />}>
        {/* .... */}
      </Route>
    </Route>
  )
);

// 라우터 인스턴스 기본 내보내기
export default router;
