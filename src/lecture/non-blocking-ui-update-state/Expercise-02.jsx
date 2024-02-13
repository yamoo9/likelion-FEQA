import { useCallback, useState, useTransition } from 'react';
import { AboutTab, ContactTab, PortfolioTab, TabButton } from './common';

const tabs = [
  {
    slug: 'about',
    text: '소개',
    element: <AboutTab />,
  },
  {
    slug: 'portfolio',
    text: '포트폴리오',
    element: <PortfolioTab />,
  },
  {
    slug: 'contacts',
    text: '연락',
    element: <ContactTab />,
  },
];

function TabContainer() {
  const [tab, setTab] = useState(tabs[0].slug);
  const [, startTransition] = useTransition();

  // [실습 2]
  //
  // 하위 컴포넌트에서 상위 컴포넌트의 상태 업데이트를 요청하는 것 또한 트랜지션이 가능합니다.
  // 예를 들어, TabButton 컴포넌트에서 onSelect 속성(prop)을 전달 받아
  // startTransition 함수를 사용해 트랜지션할 수 있습니다.
  //
  // 아래 selectTab 함수에서 트랜지션 코드를 걷어내고,
  // TabButton 컴포넌트에서 트랜지션하도록 설정해봅니다.

  const selectTab = useCallback(
    (nextTab) => () => {
      startTransition(() => setTab(nextTab));
    },
    []
  );

  const tabPanelElement = tabs.find((t) => t.slug.includes(tab))?.element;

  return (
    <>
      <div className="bg-white text-indigo-900 p-2.5 flex space-x-2 text-xs">
        {tabs.map(({ slug, text }) => (
          <TabButton
            key={slug}
            isActive={tab === slug}
            onClick={selectTab(slug)}
          >
            {text} {slug === 'portfolio' ? `(SLOW)` : ''}
          </TabButton>
        ))}
      </div>
      <div className="my-0.5 text-xs p-5 bg-white text-indigo-900">
        {tabPanelElement}
      </div>
    </>
  );
}

export default TabContainer;
