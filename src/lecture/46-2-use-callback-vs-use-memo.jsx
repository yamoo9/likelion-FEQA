import { useToggle } from '@/hooks';
import { Counter } from '@/components';

/* -------------------------------------------------------------------------- */
/* React.memo Vs. React.useMemo                                               */
/* -------------------------------------------------------------------------- */

function Exercise() {
  const { value: isVisible, toggle } = useToggle(true);

  return (
    <div>
      {isVisible && <h2>useCallback vs. useMemo</h2>}
      <button type="button" onClick={toggle}>
        {isVisible ? '제목 감춤' : '제목 표시'}
      </button>
      <Counter min={5} count={9} step={2} max={32} />
    </div>
  );
}

export default Exercise;
