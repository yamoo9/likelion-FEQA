function Exercise() {
  return (
    <section className="CatCardList" aria-label="사랑스런 고양이 가족">
      <article className="CatCard">
        <header>
          <img
            src="/images/cat-penelope.png"
            alt="멋진 안경과 반짝임/무지개 그림이 있는 고양이"
          />
          <h2>페넬로페 준</h2>
          <p className="birthday">태어난 날: 2022년 1월 21일</p>
        </header>
        <ul className="badgeList golden">
          <li>🏓 운동</li>
          <li>📸 포토그래퍼</li>
          <li>🏅 올림픽 메달리스트</li>
        </ul>
      </article>
      <article className="CatCard">
        <header>
          <img
            src="/images/cat-baron.png"
            alt="모자와 단안경 그리고 콧수염이 멋진 신사 고양이"
          />
          <h2>에글링턴의 남작 몽고메리</h2>
          <p className="birthday">태어난 날: 1974년 8월 3일</p>
        </header>
      </article>
      <article className="CatCard">
        <header>
          <img
            src="/images/cat-clawmaker.png"
            alt="귀걸이와 핑크색 모히칸 모자를 쓴 펑크 록 고양이"
          />
          <h2>조안 클로메이커</h2>
          <p className="birthday">태어난 날: 2019년 10월 15일</p>
        </header>
        <ul className="badgeList">
          <li>⭐️ 록스타</li>
          <li>🎸 뮤지션</li>
        </ul>
      </article>
    </section>
  );
}

export default Exercise;
