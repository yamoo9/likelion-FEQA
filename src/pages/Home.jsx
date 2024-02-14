import { useDocumentTitle } from '@/hooks';

function HomePage() {
  useDocumentTitle('홈');

  return (
    <>
      <h2 className="my-5">홈 페이지</h2>
    </>
  );
}

export default HomePage;
