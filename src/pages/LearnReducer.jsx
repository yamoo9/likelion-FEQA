import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { FormInput } from '@/components';
import { useRef, useReducer } from 'react';

// 리듀서 함수
const manageMessages = (state, action /* { type, payload? } */) => {
  // ADD ACTION
  if (action.type === '메시지/추가') {
    // 새로운 상태가 반환
    return {
      ...state,
      messages: [action.payload, ...state.messages],
    };
  }

  // EDIT ACTION

  // DELETE ACTION

  // DEFAULT ACTION
  return state;
};

// 초깃값(관리할 상태)
const INIT_MESSAGES_INFO = {
  messages: ['wow'],
};

export function Component() {
  const inputRef = useRef(null);
  // const [messages, setMessages] = useState(['wow']);
  // const [newMessage, setNewMessage] = useState('');

  const [messageState, dispatch] = useReducer(
    manageMessages,
    INIT_MESSAGES_INFO
  );

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('리듀서 활용! 리덕스처럼!!!!')}</title>
        <meta name="description" content="..." />
      </Helmet>
      <h2 className="my-5">리듀서 함수를 활용해 복잡한 상태 관리</h2>

      <form
        className="flex gap-5"
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          const newMessage = formData.get('message');

          // setMessages((m) => [newMessage, ...m]);
          // setNewMessage('');

          const addAction = {
            type: '메시지/추가',
            payload: newMessage,
          };

          dispatch(addAction);

          const input = inputRef.current;
          input.value = '';
          input.focus();
        }}
      >
        <FormInput ref={inputRef} name="message" label="message" hiddenLabel>
          메시지
        </FormInput>
        <button type="submit">추가</button>
      </form>

      <ul className="my-5">
        {messageState.messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </>
  );
}

Component.displayName = 'LearnReducerPage';
