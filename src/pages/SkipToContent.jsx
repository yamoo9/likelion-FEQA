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
      <nav aria-label="특정 영역 이동 링크" className="my-5 text-xs flex gap-5">
        <SkipToContent href="#section-200">섹션 200으로 이동</SkipToContent>
        <SkipToContent href="#section-300">섹션 300으로 이동</SkipToContent>
        <SkipToContent href="#section-900">섹션 900으로 이동</SkipToContent>
      </nav>
      <div className="flex flex-col space-y-0.5 border-2 border-slate-300">
        {range(100, 900, 100)
          .map((n) => ({
            // color: `bg-slate-${n}`,
            id: n,
          }))
          .map(({ id: n }) => {
            return (
              <Section
                key={n}
                id={`section-${n}`}
                headline={`섹션 헤드라인 #${n}`}
                // color={color}
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

function Section({ id, headline, color = 'bg-slate-950', children }) {
  return (
    <section className={`h-[50vh] ${color} text-slate-300 p-5`}>
      <h3 id={id}>{headline}</h3>
      {children}
    </section>
  );
}

Section.propTypes = {
  id: string.isRequired,
  headline: string.isRequired,
  color: string,
  children: node,
};

export default SkipToContentPage;
