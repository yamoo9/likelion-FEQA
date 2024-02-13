import { CHAT_MESSAGE_TYPE } from './types';

function SpeechBubble({ messages }) {
  return (
    <div className="flex flex-col gap-5 bg-slate-400 text-slate-50 p-5">
      <h3 className="text-slate-600">SpeechBubble</h3>
      <ul className="flex flex-col gap-2">
        {messages.map((message, index) => (
          <li key={index} className="text-xs text-slate-900">
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
}

SpeechBubble.propTypes = {
  messages: CHAT_MESSAGE_TYPE.isRequired,
};

export default SpeechBubble;
