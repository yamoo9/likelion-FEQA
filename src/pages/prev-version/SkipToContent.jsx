import { useEffect } from 'react';
import { node, string } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Navigate, useNavigate } from 'react-router-dom';
import { getDocumentTitle, range } from '@/utils';
import { SkipToContent } from '@/components';

let tryDemo = false;

function SkipToContentPage({ goTo }) {
  // React Router 6.4+ <Redirect /> 사용 못함

  // 프로그래밍 방식 1.
  // useNavigate 훅
  const navigate = useNavigate();

  useEffect(() => {
    let timerClearId = 0;

    if (tryDemo) {
      timerClearId = setTimeout(() => {
        navigate('/context-intro', { replace: true });
      }, 3000);
    }
    return () => {
      clearTimeout(timerClearId);
    };
  }, [navigate]);

  // 프로그래밍 방식 2.
  // <Navigate /> 컴포넌트
  if (goTo) {
    return <Navigate to={goTo} replace />;
  }

  const ranges = range(100, 900, 100);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('특정 위치로 바로가기')}</title>
        <meta
          name="description"
          content="어떤 사용자는 반복적인 내비게이션 영역을 건너 띄어 본문 영역 또는 특정 영역으로 바로 이동하는 기능이 필요합니다."
        />
      </Helmet>
      <h2 className="my-5">특정 위치로 바로가기</h2>
      <nav aria-label="특정 영역 이동 링크">
        {ranges.map((n) => (
          <SkipToContent
            key={n}
            className="!fixed top-2 right-4 p-1 bg-indigo-950 text-white text-xs"
            href={`#section-${n}`}
          >
            섹션 {n}으로 이동
          </SkipToContent>
        ))}
      </nav>
      <div className="flex flex-col space-y-0.5 border-2 border-white shadow-md">
        {ranges
          .map((n) => ({
            bgColor: `bg-slate-${n}`,
            textColor: `text-slate-${n >= 500 ? 50 : 950}`,
            id: n,
          }))
          .map(({ id: n, bgColor, textColor }) => {
            return (
              <Section
                key={n}
                id={`section-${n}`}
                headline={`섹션 헤드라인 #${n}`}
                bgColor={bgColor}
                textColor={textColor}
              />
            );
          })}
      </div>
    </>
  );
}

SkipToContentPage.propTypes = {
  goTo: string,
};

function Section({
  id,
  headline,
  bgColor = 'bg-slate-950',
  textColor = 'text-slate-50',
  children,
}) {
  return (
    <section className={`h-[50vh] ${bgColor} ${textColor} p-5`}>
      <h3 id={id}>{headline}</h3>
      {children}
    </section>
  );
}

Section.propTypes = {
  id: string.isRequired,
  headline: string.isRequired,
  bgColor: string,
  textColor: string,
  children: node,
};

export default SkipToContentPage;
