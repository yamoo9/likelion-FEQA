import { useContext, useRef } from 'react';
import { ChatContext } from '@/contexts/Chat';

function MessageInput() {
  // 상태가 아닌데??
  // 화면을 변경하는게 아닌데???
  // 동일 참조 (어떤 데이터 타입? 객체형 타입: function, array, object)
  const { updateMessages: onSend } = useContext(ChatContext); // (memoized) object

  const inputRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const inputElement = inputRef.current;
    const formData = new FormData(e.target);
    const message = formData.get('message');

    if (message.trim().length > 0) {
      onSend?.(message);
      inputElement.value = '';
    } else {
      inputElement.value = '';
      inputElement.focus();
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-slate-400 text-slate-800 p-5">
      <h3 className="text-slate-600">MessageInput</h3>
      <form onSubmit={handleSendMessage} className="flex gap-1">
        <input
          ref={inputRef}
          type="text"
          name="message"
          aria-label="채팅 메시지"
          placeholder="친구야 보고싶다!"
          className="p-2 border border-slate-300 text-xs"
        />
        <button type="submit" className="p-2 bg-slate-800 text-slate-50">
          보내기
        </button>
      </form>
    </div>
  );
}

export default MessageInput;
