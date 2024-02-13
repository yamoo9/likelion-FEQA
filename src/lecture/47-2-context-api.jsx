import ChatPage from './context-api/ChatPage';

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
