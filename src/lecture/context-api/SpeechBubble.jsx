import { CHAT_MESSAGE_TYPE } from './types';

function SpeechBubble({ messages }) {
  return (
    <div>
      <h3>SpeechBubble</h3>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

SpeechBubble.propTypes = {
  messages: CHAT_MESSAGE_TYPE.isRequired,
};

export default SpeechBubble;
