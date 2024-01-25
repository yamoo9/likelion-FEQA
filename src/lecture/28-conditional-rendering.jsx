export default function Exercise() {
  // 로그인 여부 (상태 변수, 랜덤 값)
  let isSignin = false; // Math.random() >= 0.5;

  // 로그인 여부에 따라 조건부 렌더링 마크업
  let markup = <></>;

  // 서버 측 렌더링 (서버에서 그려옵니다.)
  // 조건부 렌더링 (실제 DOM에 그리지 않는다.)

  // 클라이언트 측 렌더링 (클라이언트에서 그립니다.)
  // 조건부 렌더링 (실제 DOM에 그리지 않는다.)
  if (isSignin) {
    markup = <div>대시보드 페이지 표시</div>;
  } else {
    markup = <div>로그인 페이지 표시</div>;
  }

  return markup;
}
