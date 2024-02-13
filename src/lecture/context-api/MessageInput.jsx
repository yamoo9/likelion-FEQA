import { memo, useRef } from 'react';
import { useChatUpdaters } from '@/contexts/Chat';

function MessageInput() {
  const { updateMessages: onSend } = useChatUpdaters();

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

export default memo(MessageInput);
