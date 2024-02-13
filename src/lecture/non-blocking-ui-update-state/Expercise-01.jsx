import { useCallback, useState } from 'react';
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

  // [실습 1]
  //
  // 비용이 많이 드는 계산을 포함하는 컴포넌트를 사용할 경우,
  // UI는 일시적으로 멈추게 되고 사용자는 혼란스러워 합니다.
  // 탭 버튼을 포트폴리오 → 연락 순으로 눌러보세요.
  //
  // 이처럼 UI가 멈추기 되면 사용자 경험이 안좋습니다.
  // 이런 경우, useTransition 훅을 사용해 사용자 경험을 개선할 수 있습니다.
  // useTransition 훅은 UI를 차단하지 않고, 상태를 업데이트 할 수 있는 빌트인 훅입니다.
  //
  // useTransition 훅 사용법은 다음과 같습니다.
  // const [isPending, startTransition] = useTransition();
  //
  // isPending → 보류(pending) 중인 트랜지션이 있는 지 여부
  // startTransition → 상태 업데이트를 트랜지션으로 처리하는 함수
  //
  // 트랜지션을 사용하면 리-렌더링 도중에도 UI가 반응성을 유지합니다.
  // 예를 들어, 사용자가 탭을 클릭했다가 마음이 바뀌어
  // 다른 탭을 클릭해도 UI는 멈추지 않습니다.
  //
  // 아래 selectTab 함수에 startTransition 함수를 설정해
  // UI를 차단하지 않고 상태를 업데이트 하도록 구현해봅니다. 😀

  const selectTab = useCallback(
    (nextTab) => /* handleSelectTab */ () => {
      setTab(nextTab);
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
