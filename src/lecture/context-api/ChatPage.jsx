import { ChatProvider } from '@/contexts/Chat';
import ChatRoomList from './ChatRoomList';
import NavBar from './NavBar';

function ChatPage() {
  return (
    <ChatProvider>
      <div className="flex flex-col space-y-5 bg-slate-100 text-slate-800 p-5 shadow-sm">
        <h3 className="text-xl font-extralight">ChatPage</h3>
        <NavBar />
        <ChatRoomList />
      </div>
    </ChatProvider>
  );
}

export default ChatPage;
