import { memo } from 'react';
import ChatRoomInfo from './ChatRoomInfo';
import MessageInput from './MessageInput';
import SpeechBubble from './SpeechBubble';
import { CHAT_USER_TYPE } from './types';

function ChatRoom({ users }) {
  return (
    <div>
      <h3>ChatRoom {users.name}</h3>
      <ChatRoomInfo userRole={users.role} />
      <SpeechBubble />
      <MessageInput />
    </div>
  );
}

ChatRoom.propTypes = {
  users: CHAT_USER_TYPE,
};

export default memo(ChatRoom);
