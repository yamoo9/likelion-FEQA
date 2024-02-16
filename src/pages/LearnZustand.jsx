import { Suspense, lazy, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { getDocumentTitle } from '@/utils';
import { FormInput } from '@/components';
import { useMessageStore } from '@/store/useMessageStore';

const Counter = lazy(() => import('@/pages/components/counter/Counter'));

const messageSelector = (state) => state;

export function Component() {
  const addInputRef = useRef(null);
  const editInputRef = useRef(null);

  // [실습]
  // Zustand 라이브러리 create 메서드로 생성한
  // useMessageStore 훅을 사용해 상태를 관리합니다.
  const {
    messages,
    selectedMessage,
    add,
    select,
    edit,
    delete: deleteMessage,
  } = useMessageStore(messageSelector);

  const handleAddMessage = (e) => {
    e.preventDefault();

    const addInput = addInputRef.current;

    if (addInput.value.trim().length === 0) {
      alert('추가할 메시지를 올바르게 입력하세요');
      addInput.value = '';
      addInput.focus();
      return;
    }

    // [상태 업데이트 요청] 메시지 추가
    add(addInput.value);

    addInput.value = '';
    addInput.focus();
  };

  const handleDeleteMessage = (deleteId) => () => {
    // [상태 업데이트 요청] 메시지 삭제
    deleteMessage(deleteId);
  };

  const handleEditMessage = (e) => {
    e.preventDefault();

    const editInput = editInputRef.current;

    if (editInput.value.trim().length === 0) {
      alert('수정할 메시지를 올바르게 입력하세요');
      editInput.value = '';
      editInput.focus();
      return;
    }

    // [상태 업데이트 요청] 메시지 수정
    edit({
      ...selectedMessage,
      text: editInput.value,
    });

    editInput.value = '';
  };

  const handleSelectMessage = (selectId) => () => {
    // [상태 업데이트 요청] 메시지 선택
    select(selectId);
  };

  useEffect(() => {
    if (selectedMessage) {
      const editInput = editInputRef.current;

      editInput.value = selectedMessage.text;
      editInput.select();
    }
  }, [selectedMessage]);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('Zustand로 상태 관리')}</title>
        <meta
          name="description"
          content="Zustand 라이브러리를 사용해 엡의 상태를 관리하는 방법을 학습합니다."
        />
      </Helmet>

      <Suspense fallback={<span>로딩 중...</span>}>
        <div className="mt-2 mb-5">
          <Counter />
        </div>
      </Suspense>

      <hr />

      <h2 className="my-5">Zustand 라이브러리 활용</h2>

      <div className="flex flex-col space-y-2">
        <form className="flex gap-1" onSubmit={handleAddMessage}>
          <FormInput
            ref={addInputRef}
            name="add-message"
            placeholder="추가할 메시지 입력"
            label="메시지 추가"
            hiddenLabel
            inputProps={{
              className: 'p-2 text-xs rounded',
            }}
          >
            메시지 추가
          </FormInput>
          <button
            type="submit"
            className="bg-indigo-100 py-1 px-3 rounded text-xs hover:bg-indigo-200"
          >
            추가
          </button>
        </form>
        <form className="flex gap-1" onSubmit={handleEditMessage}>
          <FormInput
            ref={editInputRef}
            name="edit-message"
            placeholder="수정할 메시지"
            label="메시지 수정"
            hiddenLabel
            inputProps={{
              className: 'p-2 text-xs rounded',
              disabled: !selectedMessage,
            }}
          >
            메시지 수정
          </FormInput>
          <button
            type="submit"
            className="bg-indigo-100 py-1 px-3 rounded text-xs enable:hover:bg-indigo-200 disabled:cursor-not-allowed disabled:text-indigo-400"
            disabled={!selectedMessage}
          >
            수정
          </button>
        </form>
      </div>

      <ul className="my-5 text-xs w-[260px]">
        {messages.map(({ id, text }) => (
          <li
            key={id}
            className="flex gap-x-4 items-center justify-between p-2 bg-white rounded shadow"
          >
            <span className="truncate" title={text}>
              {text}
            </span>
            <div className="flex space-x-1">
              <button
                type="button"
                title="메시지 편집"
                aria-label="메시지 편집"
                onClick={handleSelectMessage(id)}
                className="bg-indigo-100 w-5 h-5 shadow rounded hover:bg-indigo-200"
              >
                ✏️
              </button>
              <button
                type="button"
                title="메시지 삭제"
                aria-label="메시지 삭제"
                onClick={handleDeleteMessage(id)}
                className="bg-indigo-100 w-5 h-5 shadow rounded hover:bg-indigo-200"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

Component.displayName = 'LearnReducerPage';
