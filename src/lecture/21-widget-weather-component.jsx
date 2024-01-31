import Widget from '@/components/Widget/Widget';

function Exercise() {
  return (
    <div className="app">
      <Widget
        type="partly cloudy"
        temperature={-0.9}
        summary="어제보다 1.3° 낮아요"
        location="서울"
      />

      <Widget
        type="rainy"
        temperature={-0.7}
        summary="어제보다 0.1° 높아요"
        location="도쿄"
      />

      <Widget
        type="sunny"
        temperature={-1.2}
        summary="어제보다 1.1° 낮아요"
        location="베이징"
      />
    </div>
  );
}

export default Exercise;
