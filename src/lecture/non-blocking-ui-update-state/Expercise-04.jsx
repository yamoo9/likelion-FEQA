import { bool, func, node, string } from 'prop-types';
import { Suspense, useCallback, useState } from 'react';
import { AboutTab, ContactTab } from './common';
import PortfolioTab from './slow/PortfolioTab';

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

  const selectTab = useCallback(
    (nextTab) => () => {
      setTab(nextTab);
    },
    []
  );

  const tabPanelElement = tabs.find((t) => t.slug.includes(tab))?.element;

  return (
    <Suspense fallback={<p>로딩 중... 🍥</p>}>
      <div className="bg-white text-indigo-900 p-2.5 flex space-x-2 text-xs">
        {tabs.map(({ slug, text }) => (
          <TabButton
            key={slug}
            isActive={tab === slug}
            onSelect={selectTab(slug)}
          >
            {text} (SLOW)
          </TabButton>
        ))}
      </div>
      <div className="my-0.5 text-xs p-5 bg-white text-indigo-900">
        {tabPanelElement}
      </div>
    </Suspense>
  );
}

export default TabContainer;

/* -------------------------------------------------------------------------- */

const baseClassNames = 'px-2 py-1';
const baseActiveClassNames = 'font-bold bg-slate-100 rounded shadow-inner';

function TabButton({
  children,
  isActive = false,
  className = '',
  onSelect,
  ...restProps
}) {
  // [실습 4]
  //
  // 때로는 원치 않는 로딩 상태 표시가 사용자에게 방해가 될 수 있습니다.
  // 예를 들어 Subpense를 사용하는 데이터 소스를 사용해 일부 데이터를 가져오는 경우가 그렇습니다.
  // 포트폴리오 탭 버튼을 클릭하면 화면에 로딩 폴백이 표시됩니다.
  //
  // 로딩 표시를 위해 탭 컨테이너가 전부 사라지면 사용자 경험이 혼란스러워집니다.
  // 이런 경우, 탭 버튼에 보류 중 상태를 표시하도록 설정해 문제를 해결할 수 있습니다.
  //
  // 트랜지션은 탭 컨테이너 같이 이미 노출된 콘텐츠를 화면에서 숨기지 않을 만큼만 "대기"합니다.

  const activeClassNames =
    `${baseClassNames} ${baseActiveClassNames} ${className}`.trim();

  if (isActive) {
    return (
      <b className={activeClassNames} {...restProps}>
        {children}
      </b>
    );
  }

  return (
    <button
      type="button"
      className={`${baseClassNames} ${className}`.trim()}
      onClick={() => {
        onSelect?.();
      }}
      {...restProps}
    >
      {children}
    </button>
  );
}

TabButton.propTypes = {
  children: node.isRequired,
  isActive: bool,
  className: string,
  onSelect: func,
};
