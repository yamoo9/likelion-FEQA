import { CHAT_ROLE_TYPES } from './types';

function ChatRoomInfo({ userRole }) {
  return (
    <div className="flex flex-col gap-5 bg-slate-400 text-slate-50 p-5">
      <h3>ChatRoomInfo {userRole}</h3>
    </div>
  );
}

ChatRoomInfo.propTypes = {
  userRole: CHAT_ROLE_TYPES,
};

export default ChatRoomInfo;
