import { memo } from 'react';
import { number } from 'prop-types';

function PortfolioTab() {
  // Console에 한 번만 기록합니다. 실제 속도 저하는 SlowPost 내부에서 이뤄집니다.
  console.log('[의도적으로 느리게 구성] <SlowPost /> 500번 렌더링');

  let items = [];

  for (let i = 0; i < 500; i++) {
    items.push(<SlowPortfolioItem key={i} index={i} />);
  }

  return (
    <ul className="overflow-y-auto max-h-[200px] flex flex-col space-y-2">
      {items}
    </ul>
  );
}

export default memo(PortfolioTab);

/* -------------------------------------------------------------------------- */

function SlowPortfolioItem({ index }) {
  let startTime = performance.now();

  while (performance.now() - startTime < 1) {
    // 매우 느린 코드를 구현하기 위해 항목마다 1ms 동안 아무것도 하지 않도록 합니다.
  }

  return (
    <li className="text-xs text-slate-600">
      포트폴리오 <b className="font-bold text-indigo-700/90">#{index + 1}</b>
    </li>
  );
}

SlowPortfolioItem.propTypes = {
  index: number.isRequired,
};
