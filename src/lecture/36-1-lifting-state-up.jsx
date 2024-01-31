import classes from './36-lifting-state-up.module.css';
import { useState } from 'react';
import { A11yHidden } from '@/components';

// [학습 주제]
// 컴포넌트 사이에 상태를 공유해요!
// - 컴포넌트 상태(자신 안에서만 사용 가능)
// - 하위 컴포넌트에는 속성(props)로 상태를 전달할 수 있다.
// - 다른 형제 또는 저 멀리 있는 컴포넌트와 상태를 공유할 수 없다.
// - 컴포넌트 사이에 상태를 공유하려면?
//   공유하려는 컴포넌트 들의 가장 가까운 상위 컴포넌트로 상태를 끌어올려야 한다.

// states → Stateful component (container)
function Accordion() {
  const headlineId = crypto.randomUUID();

  const [openedPanelIndex, setOpenedPanelIndex] = useState(0);

  const handleOpenPannel = (panelIndex) => {
    setOpenedPanelIndex(panelIndex);
  };

  return (
    <article className={classes.Accordion} aria-labelledby={headlineId}>
      <A11yHidden as="h2" id={headlineId}>
        아코디언을 사용해 컴포넌트 간 상태 공유
      </A11yHidden>
      <AccordionPanel
        index={0}
        isOpen={openedPanelIndex === 0}
        onToggle={handleOpenPannel}
      >
        <p>아코디언 컴포넌트는 ..... 1</p>
      </AccordionPanel>
      <AccordionPanel
        index={1}
        isOpen={openedPanelIndex === 1}
        onToggle={handleOpenPannel}
      >
        <p>아코디언 컴포넌트는 ..... 2</p>
      </AccordionPanel>
    </article>
  );
}

// props → Stateless component (presentation)
function AccordionPanel({
  isOpen = false,
  index,
  onToggle,
  children,
  ...restProps
}) {
  return (
    <div className={classes.AccordionPanel} {...restProps}>
      <button type="button" onClick={() => onToggle(index)}>
        {isOpen ? '닫음' : '열림'}
      </button>
      <div hidden={!isOpen}>{children}</div>
    </div>
  );
}

export default function Exercise() {
  return (
    <div>
      <h2>상태 끌어올리기</h2>
      <Accordion></Accordion>
    </div>
  );
}
