import './App.css';
import Widget from '../components/Widget/Widget';
import Button from '../components/Button/Button';

// const styles = {
//   app: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//   },
// };

function App() {
  return (
    <div className="app" /*  style={styles.app} */>
      <Widget
        type="partly cloudy"
        temperature={-0.9}
        summary="어제보다 1.3° 낮아요"
        location="서울"
      />

      <Button>저장</Button>

      <Widget
        type="rainy"
        temperature={-0.7}
        summary="어제보다 0.1° 높아요"
        location="도쿄"
      />

      <Button disable>취소</Button>

      <Widget
        type="sunny"
        temperature={-1.2}
        summary="어제보다 1.1° 낮아요"
        location="베이징"
      />
    </div>
  );
}

export default App;
