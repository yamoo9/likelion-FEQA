export default function Exercise2({ isShowLink = false }) {
  // 조건부 표시 (display : show or hide)
  // 강사는 왜 조건부 표시를 다루는가?
  // 뷰는?
  // 리액트 공식 문서는 조건부 렌더링만 다룹니다.
  return (
    <div>
      <span className="message one">리액트</span>
      {isShowLink ? ' (' : ''}
      <a
        // v-show 디렉티브처럼 (수시로 전환(toggle)할 경우 더 나음)
        // hidden={isShowLink}
        style={{ display: isShowLink ? 'inline' : 'none' }}
        href="https://react.dev"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://react.dev
      </a>
      {isShowLink ? ')' : ''}
    </div>
  );

  // 조건부 렌더링 (rendering)
  // return (
  //   <div>
  //     <span className="message one">리액트</span>
  //     {isShowLink && (
  //       <>
  //         (
  //         <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
  //           https://react.dev
  //         </a>
  //         )
  //       </>
  //     )}
  //   </div>
  // );
}

// eslint-disable-next-line no-unused-vars
function Exercise1() {
  // return (
  //   <>
  //     <DashboardPage />
  //     <SignInPage />
  //   </>
  // );

  // 로그인 여부 (상태 변수, 랜덤 값)
  let isSignin; // Math.random() >= 0.5;

  console.log(isSignin);

  // 로그인 여부에 따라 조건부 렌더링 마크업
  // let markup = <></>;

  // 서버 측 렌더링 (서버에서 그려옵니다.)
  // 조건부 렌더링 (실제 DOM에 그리지 않는다.)

  // 클라이언트 측 렌더링 (클라이언트에서 그립니다.)
  // 조건부 렌더링 (실제 DOM에 그리지 않는다.)

  // 1-1. if 문 활용 렌더링
  // if (isSignin) {
  //   markup = <DashboardPage />;
  // } else {
  //   markup = <SignInPage />;
  // }

  // return markup;

  // 1-2. switch 문 활용 렌더링
  // switch (isSignin) {
  //   case true:
  //     return <DashboardPage />;
  //   default:
  //     return <SignInPage />;
  // }

  // 2. 제어 흐름 연산자 식 활용 렌더링
  // return isSignin && <DashboardPage />;

  // 3. 터너리(삼항 연산자 식)
  // return isSignin ? <DashboardPage /> : <SignInPage />;

  // 4. nullish 병합 연산자 활용

  // return isSignin ?? <SignInPage />;

  // 5. 옵셔널 체이닝 활용
  return renders.dashbardPage?.(); // undefined
}

const renders = {
  sign() {
    return <SignInPage />;
  },
  dashbard() {
    return <DashboardPage />;
  },
  // dashboardPage: undefined
};

function DashboardPage() {
  return <div>대시보드 페이지 표시</div>;
}

function SignInPage() {
  return <div>로그인 페이지 표시</div>;
}
