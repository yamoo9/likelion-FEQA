// 초깃값(관리할 상태)
export const INIT_MESSAGES_INFO = {
  messages: [
    {
      id: crypto.randomUUID(),
      text: '리듀서 함수를 작성해봐요~',
    },
  ],
  editMessage: null,
};

// 리듀서(상태 관리 함수)
export const manageMessages = (state, action /* { type, payload? } */) => {
  // 메시지/추가
  switch (action.type) {
    case CREATE_MESSAGE:
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

    case DELETE_MESSAGE:
      // 새로운 상태가 반환
      return {
        ...state,
        messages: state.messages.filter(
          (m) => m.id !== action.payload /* deleteId */
        ),
      };

    case SELECT_EDIT_MESSAGE:
      // 새로운 상태가 반환
      return {
        ...state,
        editMessage: action.payload,
      };

    case EDIT_MESSAGE:
      // 새로운 상태가 반환
      return {
        ...state,
        messages: state.messages.map((m) => {
          if (m.id === action.payload.id) {
            return action.payload;
          }
          return m;
        }),
        editMessage: null,
      };

    // case '메시지/읽기':
    default:
      // 기존 상태 반환
      return state;
  }
};

// 액션 타입
export const CREATE_MESSAGE = '메시지/추가';
export const DELETE_MESSAGE = '메시지/삭제';
export const EDIT_MESSAGE = '메시지/수정';
export const SELECT_EDIT_MESSAGE = '메시지/수정/선택';
