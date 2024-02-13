import { bool, func, node, string } from 'prop-types';
import { useCallback, useState, useTransition } from 'react';
import { AboutTab, ContactTab, PortfolioTab } from './common';

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
    <>
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
    </>
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
  // [실습 3]
  //
  // 트랜지션 중임을 "보류" 상태로 표시할 수 있습니다.
  // 보류(pending) 상태 값을 빼내서 UI에 반영하여
  // 보류 중인 상태로 인식할 수 있도록 표시합니다.

  const [, startTransition] = useTransition();

  if (isActive) {
    const activeClassNames =
      `${baseClassNames} ${baseActiveClassNames} ${className}`.trim();

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
        startTransition(() => onSelect?.());
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
