import { Helmet } from 'react-helmet-async';
import Exercise from '@/lecture/deferred-value/Exercise-05-finished';
import { getDocumentTitle } from '@/utils';

// React Router v6.4+ 의 새로운 기능인 lazy 속성을 사용해
// 페이지 컴포넌트를 로딩하려면 아래 처럼 export Component를 사용해야 합니다.
export function Component() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('상태 업데이트 지연')}</title>
        <meta
          name="description"
          content="useDeferredValue 훅은 상태를 즉시 업데이트 하지 않고 지연 처리합니다."
        />
      </Helmet>
      <h2 className="my-5">상태 업데이트 지연</h2>
      <Exercise />
    </>
  );
}

// 개발도구에서 컴포넌트 표시 이름을 설정해야 디버깅 하기 좋습니다.
Component.displayName = 'DeferredValuePage';
