import { FormInput, Stack } from '@/components';
import { debounce } from '@/utils';
import { useState } from 'react';

const KEYWORDS = [
  '리액트',
  '뷰',
  '스타일드 컴포넌트',
  '리액트 라우터',
  '탠스텍 쿼리',
  '그래프 쿼리',
  '넥스트 제이에스',
  '츄스탄트',
  '뷰 라우터',
  '엑시오스',
];

Object.freeze(KEYWORDS);

function Exercise() {
  return (
    <Stack vertical my={20}>
      <h2 style={{ marginBlock: 0 }}>검색 폼</h2>
      <SearchForm />
    </Stack>
  );
}

function SearchForm() {
  // 상태 (시간의 흐름에 따라 값이 변함)
  // [2] 상태를 복잡한 객체로 묶어서 관리할 필요가 있나???
  // [3] 복잡한 상태 관리를 간단하게 줄여야겠다.
  // [4] 상태 관리 코드를 수정하자!
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    // 리-렌더링 요청
    setQuery(e.target.value);
  };

  // 파생된 상태(derived state)란?
  // (선언된 상태에 의존하여 값이 변경되는 상태)
  // [1] KEYWORDS 배열에서 query 값을 가진 항목만 거른 배열이 필요해!

  const filteredKeywords = KEYWORDS.filter((keyword) =>
    keyword.includes(query)
  );

  return (
    <Stack vertical gap={20}>
      <form>
        <FormInput
          // [2]
          // 리액트에 의해서 제어되는 상황
          // 사용자가 입력해도 화면은 바뀌지 않는다.
          // value={query}
          //
          // [3]
          // 입력이 안되는 문제 해결을 위해서 사용자가 직접 수정할 수 있게 조치한다.
          // value -> defaultValue
          defaultValue={query}
          //
          // [1]
          // 디바운싱 적용 이전: 사용자가가 입력할 때마다 상태를 업데이트 시도합니다.
          // 디바운싱 적용 이후: 사용자 입력이 끝난 후, 0.4초가 지나면 그 때 상태 업데이트를 시도합니다.
          onChange={debounce(handleQuery)}
          // onChange={handleQuery}
          type="search"
          label="학습 주제"
          placeholder="학습 주제 입력"
          hiddenLabel
          inputProps={{
            style: {
              padding: '4px 6px',
            },
          }}
        />
      </form>
      <Stack
        as="ul"
        vertical
        gap={8}
        style={{ marginBlock: 0, paddingInlineStart: 0, listStyle: 'none' }}
      >
        {filteredKeywords.map((keyword) => (
          <li key={keyword} style={{ fontSize: 14 }}>
            {keyword}
          </li>
        ))}
      </Stack>
    </Stack>
  );
}

export default Exercise;
