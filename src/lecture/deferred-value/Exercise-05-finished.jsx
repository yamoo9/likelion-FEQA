import { useId, useState, useCallback, useDeferredValue } from 'react';
import SlowList from './common/SlowList';
import { debounce } from '@/utils';

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
          defaultValue={request.name}
          onChange={debounce(handleInput)}
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
          defaultValue={request.callCount}
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
