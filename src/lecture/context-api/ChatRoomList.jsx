import { memo } from 'react';
import ChatRoom from './ChatRoom';
import ChatSummary from './ChatSummary';

function ChatRoomList() {
  return (
    <div className="flex flex-col gap-5 bg-white p-5 my-5 shadow-sm">
      <h3>ChatRoomList</h3>
      <div className="flex flex-col gap-5 bg-slate-100 p-5">
        <ChatSummary />
        <ChatRoom />
      </div>
    </div>
  );
}

export default memo(ChatRoomList);
