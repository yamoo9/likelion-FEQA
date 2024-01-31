// [학습 목표]
// 제어 컴포넌트 말고, 제어하지 않는 방식으로 폼 전송하기

function Exercise() {
  return (
    <div>
      <h2>폼 컨트롤</h2>
      <FormExample />
    </div>
  );
}

const INITIAL_FEEL_MESSAGE = '공부하기 좋은 날이네~';

function FormExample() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); /* <form /> */

    // 문
    // for (const [name, value] of formData.entries()) {
    //   console.log({ name, value });
    // }

    // 식
    Array.from(formData.entries()).map(([name, value]) => {
      console.log(name, value);
    });

    // 서버 비동기 통신 (요청)
    // Promise API
    // ....
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexFlow: 'column', gap: 20 }}
      >
        <div
          style={{
            display: 'flex',
            gap: 4,
          }}
        >
          <label htmlFor="feelMessage">오늘 기분</label>
          <input
            type="text"
            id="feelMessage"
            name="feelMessage"
            placeholder={INITIAL_FEEL_MESSAGE}
          />
        </div>

        <div
          style={{
            display: 'flex',
            gap: 4,
          }}
        >
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="user@company.dev"
          />
        </div>

        <div data-label="라디오 버튼(인풋)">
          <label>
            <input type="radio" name="agree" value="네" defaultChecked />
            동의하오!
          </label>
          <label>
            <input type="radio" name="agree" value="아니오" />
            이의있소!
          </label>
        </div>

        <div
          data-label="셀렉트 메뉴"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <label htmlFor="studySubject">공부할 주제</label>
          <select id="studySubject" name="studySubject">
            <option value="">학습 주제</option>
            <option value="react">리액트</option>
            <option value="storybook">스토리북</option>
            <option value="javascript">자바스크립트</option>
            <option value="typescript">타입스크립트</option>
            <option value="pass">오늘은 패스!!!</option>
          </select>
        </div>

        <div
          role="group"
          style={{
            display: 'flex',
            gap: 4,
          }}
        >
          <button type="submit">보내기</button>
          <button type="reset">취소</button>
        </div>
      </form>
    </>
  );
}

export default Exercise;
