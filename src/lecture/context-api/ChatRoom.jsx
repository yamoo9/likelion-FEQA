import { memo } from 'react';
import { func } from 'prop-types';
import ChatRoomInfo from './ChatRoomInfo';
import MessageInput from './MessageInput';
import SpeechBubble from './SpeechBubble';
import { CHAT_MESSAGE_TYPE, CHAT_USER_TYPE } from './types';

function ChatRoom({ users, messages = [], onUpdate }) {
  return (
    <div>
      <h3>ChatRoom {users.name}</h3>
      <ChatRoomInfo userRole={users.role} />
      <SpeechBubble messages={messages} />
      <MessageInput onSend={onUpdate} />
    </div>
  );
}

ChatRoom.propTypes = {
  users: CHAT_USER_TYPE,
  messages: CHAT_MESSAGE_TYPE,
  onUpdate: func,
};

export default memo(ChatRoom);
