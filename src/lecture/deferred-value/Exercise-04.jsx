import { useId, useState, useCallback, useDeferredValue } from 'react';
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

  const yourName = useDeferredValue(request.name);

  // [실습 4]
  // useDeferredValue 훅 말고, debounce 함수를 사용하는 것은 어떤가요?
  //
  // 물론, 디바운싱 또는 쓰로틀링 함수를 사용하면 성능 최적화에 큰 도움이 됩니다.
  // 하지만 리액트와 긴밀하게 통합되는 것은 useDeferredValue 훅입니다.
  // useDeferredValue 훅을 사용하면 사용자 입력이 리액트에 의해 제어 됨에도
  // UI의 일부를 차단하지 않고, 응답성을 높일 수 있어 실시간으로 폼 유효성 검사를
  // 수행하는데 있어 리액트 방식으로 제어할 수 있습니다.
  // (디바운싱은 명령형 프로그래밍 필요)
  //
  // 그럼에도 디바운싱을 적용하면 리-렌더링 횟수를 효과적으로 줄일 수 있습니다.
  // 아래 코드를 디바운싱 되도록 변경해봅니다.

  return (
    <div className="p-5 w-full">
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

      <SlowList text={yourName} maxRenderCount={request.callCount} />
    </div>
  );
}

export default Exercise;
