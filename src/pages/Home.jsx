import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('홈')}</title>
        {/* meta, link */}
        <meta name="description" content="최강!!!! ....." />
      </Helmet>
      <h2 className="my-5">홈 페이지</h2>
    </>
  );
}

export default HomePage;
