import { Suspense, useCallback, useId, useState } from 'react';
import SearchResults from './common/SearchResults';

function Exercise() {
  const id = useId();
  const [query, setQuery] = useState('');
  const handleQuery = useCallback((e) => setQuery(e.target.value), []);

  // [실습 1]
  // 일반적인 대체(alternative) UI 패턴은 이전 결과를 유지한 뒤,
  // 새로운 결과가 준비될 때가지 이전 결과를 계속 표시하는 것입니다.
  // 하지만, 리액트에서 사용자 입력에 즉각 반응할 경우 로딩 메시지가 표시됩니다.
  // 이는 사용자에게 그렇게 유쾌한 경험은 아닐 것입니다.
  //
  // 그렇다면 리액트에서 UI 업데이트를 일부 지연시키려면 어떻게 해야 할까요?
  // useDeferredValue 빌트인 훅을 사용해 query를 지연시킬 수 있습니다.

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
      {/* 
        이 예시는 Suspense를 지원하는 데이터 가져오기를 사용합니다. 
        - Next.js와 같은 프레임워크에서 데이터 가져오기
        - React의 lazy 함수를 사용해 데이터 가져오기
        - React의 use 훅 함수를 사용해 Promise 가져오기
      */}
      <Suspense fallback={<p>로딩 중...</p>}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}

export default Exercise;
