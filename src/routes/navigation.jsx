// 페이지(Pages)
import HomePage from '@/pages/Home';
import IntroPage from '@/pages/Intro';
import NonBlockUIPage from '@/pages/NonBlockUI';
import DeferredValuePage from '@/pages/DeferredValue';

// 내비게이션 구성(navigation configuration)
const navigationItems = [
  {
    id: 'home',
    path: '/',
    text: '홈',
    element: <HomePage />,
  },
  {
    id: 'intro',
    path: '/intro',
    text: '소개',
    element: <IntroPage />,
  },
  {
    id: 'deferred-value',
    path: '/deferred-value',
    text: '상태 변경 지연 처리',
    element: <DeferredValuePage />,
  },
  {
    id: 'non-block-ui-with-updating-state',
    path: '/non-block-ui-with-updating-state',
    text: 'UI 차단 없이 상태 변경',
    element: <NonBlockUIPage />,
  },
];

export default navigationItems;
