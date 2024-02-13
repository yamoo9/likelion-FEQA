import ChatRoomInfo from './ChatRoomInfo';
import MessageInput from './MessageInput';
import SpeechBubble from './SpeechBubble';
import { exact, string, oneOf } from 'prop-types';
import { memo } from 'react';

function ChatRoom({ users }) {
  // 변경된 users 상태를 읽어야 한다.
  return (
    <div>
      <h3>ChatRoom {users.name}</h3>
      <ChatRoomInfo />
      <SpeechBubble />
      <MessageInput />
    </div>
  );
}

ChatRoom.propTypes = {
  users: exact({
    id: string,
    name: string,
    role: oneOf(['GUEST', 'MEMBER', 'ADMINISTRATOR']),
  }).isRequired,
};

export default memo(ChatRoom);
