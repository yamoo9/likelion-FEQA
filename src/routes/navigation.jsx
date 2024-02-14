// 페이지(Pages)
import HomePage from '@/pages/Home';
import IntroContextPage from '@/pages/IntroContext';
import NonBlockUIPage from '@/pages/NonBlockUI';
import DeferredValuePage from '@/pages/DeferredValue';
import SkipToContentPage from '@/pages/SkipToContent';
import FetchingDataPage, {
  loader as fetchingDataLoader,
} from '@/pages/FetchingData';
import ProductDetailPage, {
  loader as productDetailLoader,
} from '@/pages/ProductDetail';

// 내비게이션 구성(navigation configuration)
const navigationItems = [
  {
    id: 'home',
    index: true,
    path: '',
    text: '홈',
    element: <HomePage />,
  },
  {
    id: 'context-intro',
    path: '/context-intro',
    text: '컨텍스트 API 소개',
    element: <IntroContextPage />,
  },
  {
    id: 'skip-to-content',
    path: '/skip-to-content',
    text: '메인 영역 바로가기',
    element: <SkipToContentPage />,
  },
  {
    id: 'fetching-data',
    path: '/fetching-data',
    text: '데이터 가져오기',
    element: <FetchingDataPage />,
    loader: fetchingDataLoader,
    // 인라인 예시
    // GET
    // loader: /* loader async function */ async () => {
    //   // 비동기 호출 코드 여기에 작성
    //   return await pb.collection('products').getList();
    // },
    // children: []
    // <Outlet />
    //
    // POST, PUT, DELETE
    // action: async () => {},
  },
  {
    id: 'data-product',
    // path: '/product/:slug/color/:color',
    path: '/product/:productId',
    element: <ProductDetailPage />,
    loader: productDetailLoader,
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
