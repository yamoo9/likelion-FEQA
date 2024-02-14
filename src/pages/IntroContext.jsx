import Exercise from '@/lecture/47-2-context-api';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function IntroPage() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('컨텍스트 API 소개')}</title>
        <meta
          name="description"
          content="리액트에서 컴포넌트 사이 데이터를 손쉽게 공유하려면 컨텍스트 API를 활용합니다."
        />
      </Helmet>
      <h2 className="my-5">
        컨텍스트 <abbr title="Application Programming Interface">API</abbr> 소개
      </h2>
      <Exercise />
    </>
  );
}

export default IntroPage;
