import React from 'react';
import { createRoot } from 'react-dom/client';

// React.Component Type 1 :: class syntax
class App {
  render() {
    return (
      <div id="app" lang="en">
        <h1>React Application</h1>
      </div>
    );
  }
}

// React.Component Type 2 :: function syntax
function createApp() {
  return (
    <div id="app" lang="en">
      <h1>React Application</h1>
    </div>
  );
}

const domElement = document.getElementById('root');

if (domElement) {
  const reactDomRoot = createRoot(domElement);
  // 컴포넌트(component, class) = 생성 => 인스턴스(instance, element, object)
  // 클래스 구문
  // const app = new App().render(); // app ????
  // 함수 구문
  const app = createApp();
  console.log(app);
  reactDomRoot.render(app);
}
