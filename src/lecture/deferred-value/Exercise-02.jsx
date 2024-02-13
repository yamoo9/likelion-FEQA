import {
  Suspense,
  useCallback,
  useDeferredValue,
  useId,
  useState,
} from 'react';
import SearchResults from './common/SearchResults';

function Exercise() {
  const id = useId();
  const [query, setQuery] = useState('');
  const handleQuery = useCallback((e) => setQuery(e.target.value), []);

  const deferredQuery = useDeferredValue(query);

  // [실습 2]
  // useDeferredValue 훅을 사용하면 사용자에게 현재 데이터가 로딩 중임을 알리지 않으므로
  // 새로운 결과를 로드하는데 오랜 시간이 걸릴 경우, 사용자에게 혼란을 줄 수 있습니다.
  // 그러므로 사용자에게 새로운 결과를 로드하는 중임을 시각적으로 표현해야 합니다.
  //
  // isPending 파생 상태 변수를 선언해 사용자에게 시각적으로 데이터를 로딩 중임으로 표현해봅니다.
  // 사용자가 입력을 시작하자마자, 새로운 결과가 로드될 때까지 오래된 결과가 약간 흐리게 표시되도록 합니다.

  return (
    <div className="px-4 py-4 w-full bg-white rounded shadow-md">
      <div className="flex space-y-2.5 flex-col mb-5">
        <label htmlFor={id} className="text-sm">
          앨범 검색
        </label>
        <input
          id={id}
          type="search"
          value={query}
          onChange={handleQuery}
          className="text-sm p-2 border border-slate-300 rounded shadow-md outline-none focus-visible:outline-4 focus-visible:outline-indigo-200/40 focus-visible:outline-offset-0"
          placeholder="앨범 이름을 검색하세요."
        />
      </div>

      <Suspense fallback={<p>로딩 중...</p>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </div>
  );
}

export default Exercise;
