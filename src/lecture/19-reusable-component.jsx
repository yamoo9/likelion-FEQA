import React from 'react';
import { createRoot } from 'react-dom/client';

// [학습 주제]
// 컴포넌트 재사용
// 컴포넌트 변형

// .formControl>label+input
function FormControl() {
  return (
    <div className="formControl">
      <label>
        사용자 이름 <input type="text" name="username" />
      </label>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <FormControl />
      <FormControl />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
