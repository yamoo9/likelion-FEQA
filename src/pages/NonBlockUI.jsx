import { useDocumentTitle } from '@/hooks';
import Exercise from '@/lecture/non-blocking-ui-update-state/Expercise-01';

function NonBlockUIPage() {
  useDocumentTitle('UI 차단 없이 상태 업데이트');

  return (
    <>
      <h2 className="my-5">UI 차단 없이 상태 업데이트</h2>
      <Exercise />
    </>
  );
}

export default NonBlockUIPage;
