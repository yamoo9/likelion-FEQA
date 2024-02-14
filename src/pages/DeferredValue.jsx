import { useDocumentTitle } from '@/hooks';
import Exercise from '@/lecture/deferred-value/Exercise-01';

function DeferredValuePage() {
  useDocumentTitle('상태 업데이트 지연');

  return (
    <>
      <h2 className="my-5">상태 업데이트 지연</h2>
      <Exercise />
    </>
  );
}

export default DeferredValuePage;
