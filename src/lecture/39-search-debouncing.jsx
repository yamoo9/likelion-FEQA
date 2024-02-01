import { FormInput, Stack } from '@/components';
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
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  // 파생된 상태(derived state)란?
  // (선언된 상태에 의존하여 값이 변경되는 상태)

  return (
    <Stack vertical gap={12}>
      <form>
        <FormInput
          value={query}
          onChange={handleQuery}
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
        {KEYWORDS.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </Stack>
    </Stack>
  );
}

export default Exercise;
