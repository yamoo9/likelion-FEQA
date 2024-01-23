import { createRoot } from 'react-dom/client';
import SearchBar from '../exercises/01-searchbar/component/SearchBar';

function App() {
  return (
    <div id="app">
      <SearchBar />
    </div>
  )
}

createRoot(document.getElementById('root'))
  .render(<App />);