import { CHAT_ROLE_TYPES } from './types';

function ChatRoomInfo({ userRole }) {
  return (
    <div>
      <h3>ChatRoomInfo {userRole}</h3>
    </div>
  );
}

ChatRoomInfo.propTypes = {
  userRole: CHAT_ROLE_TYPES,
};

export default ChatRoomInfo;
