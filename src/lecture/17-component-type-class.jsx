import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

// React.Component 타입(유형) 1 :: 클래스 구문(class syntax)
class App extends Component {
  render() {
    return (
      <div id="app" lang="en">
        <h1>hello react (class component)</h1>
      </div>
    );
  }
}

const domElement = document.getElementById('root');

if (domElement) {
  const reactDomRoot = createRoot(domElement);
  reactDomRoot.render(<App />); /* React.createElement(App) */
}
