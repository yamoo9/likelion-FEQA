import { Helmet } from 'react-helmet-async';
import Exercise from '@/lecture/deferred-value/Exercise-01';
import { getDocumentTitle } from '@/utils';

function DeferredValuePage() {
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

export default DeferredValuePage;
