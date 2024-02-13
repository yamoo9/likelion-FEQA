import { memo } from 'react';
import { string, number, oneOfType } from 'prop-types';

function SlowList({ text, maxRenderCount = 250 }) {
  console.log('[인위적으로 느리게 구성] <SlowItem /> 250개 렌더링');

  // 로컬 뮤테이션
  let items = [];

  for (let i = 0; i < maxRenderCount; ++i) {
    items.push(<SlowItem key={i} text={text} />);
  }

  return (
    <ol className="flex flex-col space-y-3 overflow-y-auto max-h-[400px] border border-slate-300 p-2">
      {items}
    </ol>
  );
}

SlowList.propTypes = {
  text: string.isRequired,
  maxRenderCount: oneOfType([number, string]),
};

export default memo(SlowList);

// --------------------------------------------------------------------

function SlowItem({ text }) {
  let startTime = performance.now();

  while (performance.now() - startTime < 1) {
    // 지연된 코드 처리를 위해 1ms 동안 아무것도 하지 않습니다.
  }

  return <li className="item">만나고 싶다! &ldquo;{text}&rdquo;</li>;
}

SlowItem.propTypes = {
  text: string.isRequired,
};
