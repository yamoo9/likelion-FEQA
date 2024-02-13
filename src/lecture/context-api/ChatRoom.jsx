import { memo } from 'react';
import { func } from 'prop-types';
import ChatRoomInfo from './ChatRoomInfo';
import MessageInput from './MessageInput';
import SpeechBubble from './SpeechBubble';
import { CHAT_MESSAGE_TYPE, CHAT_USER_TYPE } from './types';

function ChatRoom({ users, messages = [], onUpdate }) {
  return (
    <div className="flex flex-col gap-5 bg-slate-200 p-5">
      <h3>ChatRoom {users.name}</h3>
      <div className="flex flex-col gap-5 bg-slate-300 p-5">
        <ChatRoomInfo userRole={users.role} />
        <SpeechBubble messages={messages} />
        <MessageInput onSend={onUpdate} />
      </div>
    </div>
  );
}

ChatRoom.propTypes = {
  users: CHAT_USER_TYPE,
  messages: CHAT_MESSAGE_TYPE,
  onUpdate: func,
};

export default memo(ChatRoom);
