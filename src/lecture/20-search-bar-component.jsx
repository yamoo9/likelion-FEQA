// new jsx tranform
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SearchBar from '../exercises/01-searchbar/component/SearchBar';
import SearchButton from '../exercises/01-searchbar/component/SearchButton';
import IconCircle from '../exercises/01-searchbar/component/IconCircle';
import IconNaver from '../exercises/01-searchbar/component/IconNaver';

// h('div', { id: 'app' }, [h('span', {}, 'hi'), ' ', h('span', {}, 'react')])

// 함수 컴포넌트는 인스턴스를 사용할 때, 속성(props)을 전달 받는다.
// 자식들(children) 속성(prop)
// <div class="app">
//  <span>hi</span> <span>react</span>
// </div>

function App() {
  return (
    <div id="app">
      {/* 인스턴스, 엘리먼트, 객체 */}
      <SearchBar>
        <SearchButton>
          <IconCircle />
          <IconNaver />
        </SearchButton>
      </SearchBar>
    </div>
  );
}

// 이전 버전: React.createElement('div', { totalPrice: 32000, student: '김용범', ... })
// 새로운 JSX 변환 : jsx('div', { totalPrice: 32000, student: '김용범', ... })

// React.createElement(React.StrictMode)

// src/main.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
