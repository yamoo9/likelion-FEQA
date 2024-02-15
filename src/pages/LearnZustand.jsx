import { Suspense, lazy, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { getDocumentTitle } from '@/utils';
import { FormInput } from '@/components';

const Counter = lazy(() => import('@/pages/components/counter/Counter'));

export function Component() {
  const addInputRef = useRef(null);
  const editInputRef = useRef(null);

  // [실습]
  // Zustand 라이브러리 create 메서드로 생성한
  // useMessageStore 훅을 사용해 상태를 관리합니다.
  const selectedMessage = null;
  const messages = [
    {
      id: crypto.randomUUID(),
      text: 'Zustand 라이브러리로 앱 상태 관리하기',
    },
  ];

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

    addInput.value = '';
    addInput.focus();
  };

  const handleDeleteMessage = () => () => {
    // [상태 업데이트 요청] 메시지 삭제
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

    editInputRef.current.value = '';
  };

  const handleSelectMessage = () => () => {
    // [상태 업데이트 요청] 메시지 선택

    const editInput = editInputRef.current;

    editInput.value = selectedMessage?.text;
    editInput.focus();
  };

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
        <div className="flex gap-1">
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
            type="button"
            className="bg-indigo-100 py-1 px-3 rounded text-xs hover:bg-indigo-200"
            onClick={handleAddMessage}
          >
            추가
          </button>
        </div>
        <div className="flex gap-1">
          <FormInput
            ref={editInputRef}
            name="edit-message"
            placeholder="수정할 메시지"
            label="메시지 수정"
            hiddenLabel
            disabled={!selectedMessage}
            inputProps={{
              className: 'p-2 text-xs rounded',
            }}
          >
            메시지 수정
          </FormInput>
          <button
            type="button"
            className="bg-indigo-100 py-1 px-3 rounded text-xs hover:bg-indigo-200"
            onClick={handleEditMessage}
          >
            수정
          </button>
        </div>
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
