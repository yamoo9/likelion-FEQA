import ChatPage from './context-api/ChatPage';

// [학습 순서]
// 3. 컨텍스트 API 활용 (글로벌 또는 특정 컨텍스트 상태 관리) ✅
// ...
// 3-4. 컨텍스트 프로바이더 래퍼 컴포넌트
// 3-5. 컨텍스트 값을 공급하는 커스텀 훅
// 3-6. 효율적인 리-렌더링 관리 (프로파일링 & 메모)

function Exercise() {
  return (
    <div className="flex flex-col space-y-5 bg-slate-50 text-slate-950 p-5 shadow-md">
      <h2 className="text-3xl font-extralight">컨텍스트 API</h2>
      <p className="text-sm text-slate-600">
        리액트 컴포넌트 간 상태를 공유하는 효율적인 방법
      </p>
      <ChatPage />
    </div>
  );
}

export default Exercise;
