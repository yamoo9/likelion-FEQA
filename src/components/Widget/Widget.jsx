import './Widget.css';

function Widget() {
  return (
    <article className="widget widget__weather">
      <h2 className="sr-only">날씨</h2>
      <img
        src="/images/weather-partly-cloudy.svg"
        alt="맑고 구름 조금"
        title="맑고 구름 조금"
      />
      <div className="weather__info" role="group">
        <span className="weather__info--template">-0.9°</span>
        <span className="weather__info--description">어제보다 1.3° 낮아요</span>
      </div>
    </article>
  );
}

export default Widget;
