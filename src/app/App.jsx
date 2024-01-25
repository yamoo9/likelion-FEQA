import './App.css';
import Exercise from '../lecture/29-a11y-hidden-component-v2';
import { getStaticImage } from '../utils/getStaticAsset';
import { Avatar } from '../components';

function App() {
  return (
    <div className="app">
      <Avatar photo={getStaticImage('faces/man-01.jpg')} />
      <Exercise />
    </div>
  );
}

export default App;
