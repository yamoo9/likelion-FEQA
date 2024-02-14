import Exercise from '@/lecture/47-2-context-api';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function IntroPage() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('컨텍스트 API 소개')}</title>
        {/* meta, link */}
        <meta name="description" content="최강 컨텍스트 API!!!! ....." />
      </Helmet>
      <h2 className="my-5">
        컨텍스트 <abbr title="Application Programming Interface">API</abbr> 소개
      </h2>
      <Exercise />
    </>
  );
}

export default IntroPage;
