import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('홈')}</title>
        <meta
          name="description"
          content="리액트 라우터를 사용해 클라이언트 사이드 라우팅 하여 싱글 페이지 앱을 만들 수 있습니다."
        />
      </Helmet>

      <h2 className="my-5">홈 페이지</h2>
      <Link
        className="inline-block p-2 mb-5 border border-slate-300 text-xs text-slate-800"
        to="/fetching-data?size=320px&filter=saturate(40%)"
      >
        데이터 가져오기 페이지로 이동
      </Link>
    </>
  );
}

export default HomePage;
