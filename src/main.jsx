import './styles/main.css';
// import './styles/avoid-bomb.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// StrictMode는 사용 목적 버그의 가능성 검토
// 리액트 함수 컴포넌트가 순수한가?
// 순수란? 렌더링 프로세스에 불순(side-effects)한 것이 껴있지 않은가?
// 순수함의 조건이란?
//   동일한 것(args)을 전달 받은 함수가 2번 실행되었을 때
//   동일한 결과(return)를 반환한다면?

// 개발 → 빌드 (StrictMode는 자동 제거) → 배포

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
