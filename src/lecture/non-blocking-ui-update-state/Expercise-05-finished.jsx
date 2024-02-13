import { bool, func, node, string } from 'prop-types';
import { Suspense, useCallback, useState, useTransition } from 'react';
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
  const [isPending, startTransition] = useTransition();

  const activeClassNames =
    `${baseClassNames} ${baseActiveClassNames} ${className}`.trim();

  if (isActive) {
    return (
      <b className={activeClassNames} {...restProps}>
        {children}
      </b>
    );
  }

  if (isPending) {
    return (
      <b
        className={`${activeClassNames} opacity-55 transition-opacity duration-500`}
        {...restProps}
      >
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
