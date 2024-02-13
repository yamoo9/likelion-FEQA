// 새로운 JSX 변환(transform) 엔진 사용하기 때문 (v17+)
// https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

import ChatRoomList from './ChatRoomList';
import NavBar from './NavBar';

function ChatPage() {
  return (
    <div>
      <h3>ChatPage</h3>
      <NavBar />
      <ChatRoomList />
    </div>
  );
}

export default ChatPage;
