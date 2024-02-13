import { useId, useState, useCallback } from 'react';
import SlowList from './common/SlowList';

function Exercise() {
  const nameId = useId();
  const callId = useId();

  const [request, setRequest] = useState({
    name: ' ',
    callCount: 1,
  });

  const handleInput = useCallback(
    ({ target: { name, value } }) =>
      setRequest((r) => ({
        ...r,
        [name]: value,
      })),
    []
  );

  // [실습 3]
  // useDeferredValue 훅을 사용해 성능 최적화를 유도할 수 있습니다.
  // UI 일부가 리-렌더링되는 속도가 느린 경우, 이를 최적화 하고자 할 경우 유용합니다.
  //
  // 구체적인 성능 이슈는 반복해야 할 횟수가 증가할수록 사용자 입력이 버벅인다는 점입니다.
  // 이런 경우 useDeferredValue 훅을 사용해 목록 결과를 리-렌더링하는 것보다,
  // 입력 업데이트를 우선 순위로 지정할 수 있습니다.
  //
  // 물론, 결과적으로 리-렌더링 속도가 빨라지는 것은 아닙니다.
  // 다만 사용자로 하여금 입력이 버벅인다는 불쾌한 기분을 줄여주는 효과를 가져올 수 있습니다.
  // 즉, 사용자는 입력하는데 거부감이 없고, 결과는 본래 처리 속도대로 표시됩니다.
  //
  // 이름을 부를 횟수를 크게 조정한 후, 이름을 입력해보세요.
  // 입력이 매우 버벅여서 유쾌한 경험은 아닐 것입니다.
  //
  // useDeferredValue 훅을 사용해 성능을 최적화하여, 사용자 경험을 개선해보세요. 👏🏻

  return (
    <div className="px-4 py-4 w-full bg-white rounded shadow-md">
      <div className="flex space-y-2.5 flex-col mb-5">
        <label htmlFor={nameId} className="text-sm">
          지금 생각나는 사람 이름
        </label>
        <input
          id={nameId}
          type="text"
          name="name"
          value={request.name}
          onChange={handleInput}
          className="text-sm p-2 border border-slate-300 rounded shadow-md outline-none focus-visible:outline-4 focus-visible:outline-indigo-200/40 focus-visible:outline-offset-0"
          placeholder="그리운 사람 이름을 입력하세요."
        />
      </div>
      <div className="w-1/4 flex space-y-2.5 flex-col mb-5">
        <label htmlFor={callId} className="text-sm">
          이름을 부를 횟수 ({request.callCount})
        </label>
        <input
          id={callId}
          type="range"
          name="callCount"
          value={request.callCount}
          min={1}
          max={300}
          onChange={handleInput}
          className="text-sm p-2 border border-slate-300 rounded outline-none focus-visible:outline-4 focus-visible:outline-indigo-200/40 focus-visible:outline-offset-0"
        />
      </div>

      <SlowList text={request.name} maxRenderCount={request.callCount} />
    </div>
  );
}

export default Exercise;
