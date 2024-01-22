import React from 'react';
import { createRoot } from 'react-dom/client';

// [학습 주제]
// - 재사용을 위한 컴포넌트 설계

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
