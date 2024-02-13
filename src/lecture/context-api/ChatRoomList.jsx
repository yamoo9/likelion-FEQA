import { useCallback, useState } from 'react';
import ChatRoom from './ChatRoom';
import ChatSummary from './ChatSummary';

function ChatRoomList() {
  const [users, setUsers] = useState({
    id: 'temp',
    name: '알 수 없음',
    role: 'GUEST',
  });

  const updateUsers = useCallback(() => {
    setUsers({
      id: 'Gby5LfLcaLXoqBSMP9aubbynNdnOem26DTiCETf0Gt8=',
      name: '박하늘',
      role: 'GUEST',
    });
  }, []);

  const [messages, setMessages] = useState(['친구야!!! 우리 언제 만나?']);

  const updateMessages = useCallback((newMessage) => {
    setMessages((messages) => [...messages, newMessage]);
  }, []);

  return (
    <div className="flex flex-col gap-5 bg-white p-5 my-5">
      <h3>ChatRoomList</h3>
      <div className="flex flex-col gap-5 bg-slate-100 p-5">
        <ChatSummary onUpdate={updateUsers} />
        <ChatRoom users={users} messages={messages} onUpdate={updateMessages} />
      </div>
    </div>
  );
}

export default ChatRoomList;
