// 초깃값(관리할 상태)
export const INIT_MESSAGES_INFO = {
  messages: [
    {
      id: crypto.randomUUID(),
      text: '리듀서 함수를 작성해봐요~ 😉',
    },
  ],
};

// 리듀서(상태 관리 함수)
export const manageMessages = (state, action /* { type, payload? } */) => {
  // 메시지/추가
  switch (action.type) {
    case '메시지/추가':
      // 새로운 상태가 반환
      return {
        ...state,
        messages: [
          {
            id: crypto.randomUUID(),
            text: action.payload,
          },
          ...state.messages,
        ],
      };

    case '메시지/삭제':
      return {
        ...state,
        messages: state.messages.filter(
          (m) => m.id !== action.payload /* deleteId */
        ),
      };

    case '메시지/수정':
      return {
        ...state,
      };

    case '메시지/읽기':
    default:
      return state;
  }
};

// 액션 타입
export const CREATE_MESSAGE = '메시지/추가';
export const DELETE_MESSAGE = '메시지/삭제';
export const EDIT_MESSAGE = '메시지/수정';
