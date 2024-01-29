import classes from './CatCardItem.module.css';

function CatCardItem() {
  return (
    <article className={classes.CatCard}>
      <header>
        <img
          src="/images/cat-penelope.png"
          alt="멋진 안경과 반짝임/무지개 그림이 있는 고양이"
        />
        <h2>페넬로페 준</h2>
        <p className={classes.birthday}>태어난 날: 2022년 1월 21일</p>
      </header>
      <ul className={`${classes.badgeList} ${classes.golden}`}>
        <li>🏓 운동</li>
        <li>📸 포토그래퍼</li>
        <li>🏅 올림픽 메달리스트</li>
      </ul>
    </article>
  );
}

export default CatCardItem;
