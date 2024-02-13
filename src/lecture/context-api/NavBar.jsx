import { useChatStates } from '@/contexts/Chat';

function NavBar() {
  const { users, messages } = useChatStates();

  return (
    <div className="flex flex-col gap-5 bg-white text-slate-700 p-5 shadow-sm">
      <h3 className="text-base">NavBar</h3>
      <div className="text-xs flex flex-col space-y-1">
        <p>
          사용자 이름: <b>{users.name}</b>
        </p>
        <p>
          채팅 메시지 갯수 (
          <span className="font-semibold">{messages.length}</span>)
        </p>
      </div>
    </div>
  );
}

export default NavBar;
