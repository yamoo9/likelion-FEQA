import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { FormInput } from '@/components';
import { useRef, useState } from 'react';

export function Component() {
  const inputRef = useRef(null);
  const [messages, setMessages] = useState(['wow']);
  const [newMessage, setNewMessage] = useState('');

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

          setMessages((m) => [newMessage, ...m]);
          setNewMessage('');

          inputRef.current.focus();
        }}
      >
        <FormInput
          ref={inputRef}
          name="text"
          label="message"
          hiddenLabel
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        >
          메시지
        </FormInput>
        <button type="submit">추가</button>
      </form>

      <ul className="my-5">
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </>
  );
}

Component.displayName = 'LearnReducerPage';
