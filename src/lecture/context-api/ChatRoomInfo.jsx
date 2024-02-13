import { useChatStates } from '@/contexts/Chat';

function ChatRoomInfo() {
  const { users } = useChatStates();

  return (
    <div className="flex flex-col gap-5 bg-slate-400 text-slate-50 p-5">
      <h3 className="text-slate-600">ChatRoomInfo </h3>
      <p className="text-xs text-slate-900">{users.role}</p>
    </div>
  );
}

export default ChatRoomInfo;
