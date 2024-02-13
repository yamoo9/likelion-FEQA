import { func } from 'prop-types';

function MessageInput({ onSend }) {
  const handleSendMessage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get('message');
    if (message.trim().length > 0) {
      onSend?.(message);
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-slate-400 text-slate-800 p-5">
      <h3>MessageInput</h3>
      <form onSubmit={handleSendMessage} className="flex gap-1">
        <input
          type="text"
          name="message"
          aria-label="채팅 메시지"
          placeholder="친구야 보고싶다!"
          className="p-2 border border-slate-300"
        />
        <button type="submit" className="p-2 bg-slate-800 text-slate-50">
          보내기
        </button>
      </form>
    </div>
  );
}

MessageInput.propTypes = {
  onSend: func,
};

export default MessageInput;
