import Exercise from '@/lecture/non-blocking-ui-update-state/Expercise-05-finished';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

export function Component() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('UI 차단 없이 상태 업데이트')}</title>
        <meta
          name="description"
          content="useTransition 훅은 UI 일부를 차단하지 않고 상태를 트랜지션하여 업데이트 할 수 있습니다."
        />
      </Helmet>
      <h2 className="my-5">UI 차단 없이 상태 업데이트</h2>
      <Exercise />
    </>
  );
}

Component.displayName = 'NonBlockUIPage';
