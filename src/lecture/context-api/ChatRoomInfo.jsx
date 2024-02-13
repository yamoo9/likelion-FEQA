import { useContext } from 'react';
import { ChatContext } from './ChatPage';

function ChatRoomInfo() {
  const { users } = useContext(ChatContext);

  return (
    <div className="flex flex-col gap-5 bg-slate-400 text-slate-50 p-5">
      <h3>ChatRoomInfo {users.role}</h3>
    </div>
  );
}

export default ChatRoomInfo;
