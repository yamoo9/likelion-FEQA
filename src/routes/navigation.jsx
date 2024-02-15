import { queryClient } from '@/lecture/48-1-client-side-routing';

// 내비게이션 구성(navigation configuration)
const navigationItems = [
  {
    id: 'home',
    index: true,
    path: '',
    text: '홈',
    // element: <HomePage />,
    lazy: () => import('@/pages/Home'),
  },
  {
    id: 'context-intro',
    path: '/context-intro',
    text: '컨텍스트 API 소개',
    // element: <IntroContextPage />,
    lazy: () => import('@/pages/IntroContext'),
  },
  {
    id: 'skip-to-content',
    path: '/skip-to-content',
    text: '메인 영역 바로가기',
    // element: <SkipToContentPage />,
    lazy: () => import('@/pages/SkipToContent'),
  },
  {
    id: 'fetching-data',
    path: '/fetching-data',
    text: '데이터 가져오기',
    // loader: fetchingDataLoader,
    // element: <FetchingDataPage />,
    async lazy() {
      const { loader /* closure */, Component } = await import(
        '@/pages/FetchingData'
      );

      return {
        loader: loader(queryClient),
        Component,
      };
    },
  },
  {
    id: 'data-product',
    // path: '/product/:slug/color/:color',
    path: '/product/:productId',
    // element: <ProductDetailPage />,
    // loader: productDetailLoader,
    async lazy() {
      const { loader, Component } = await import('@/pages/ProductDetail');
      return {
        loader: loader(queryClient),
        Component,
      };
    },
  },
  {
    id: 'deferred-value',
    path: '/deferred-value',
    text: '상태 변경 지연 처리',
    // element: <DeferredValuePage />,
    lazy: () => import('@/pages/DeferredValue'),
  },
  {
    id: 'non-block-ui-with-updating-state',
    path: '/non-block-ui-with-updating-state',
    text: 'UI 차단 없이 상태 변경',
    // element: <NonBlockUIPage />,
    lazy: () => import('@/pages/NonBlockUI'),
  },
  {
    id: 'like-redux-using-use-reducer',
    path: '/like-redux-using-use-reducer',
    text: '리듀서 함수 활용',
    lazy: () => import('@/pages/LearnReducer'),
  },
  {
    id: 'learn-zustand',
    path: '/learn-zustand',
    text: '앱 상태 관리 (with 츄스탄트)',
    lazy: () => import('@/pages/LearnZustand'),
  },
];

export default navigationItems;
