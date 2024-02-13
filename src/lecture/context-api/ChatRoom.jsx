import ChatRoomInfo from './ChatRoomInfo';
import MessageInput from './MessageInput';
import SpeechBubble from './SpeechBubble';

function ChatRoom() {
  // 변경된 users 상태를 읽어야 한다.
  return (
    <div>
      <h3>ChatRoom {users}</h3>
      <ChatRoomInfo />
      <SpeechBubble />
      <MessageInput />
    </div>
  );
}

export default ChatRoom;
