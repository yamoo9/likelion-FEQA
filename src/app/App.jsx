import { app as appClasName } from './App.module.css';
import Exercise from '@/lecture/37-3-react-form-exercise.jsx';

console.log(appClasName);

function App() {
  return (
    <div className={appClasName}>
      <Exercise />
    </div>
  );
}

export default App;
