// 초깃값(관리할 상태)
export const initialMessages = {
  editMessage: null,
  messages: [
    {
      id: crypto.randomUUID(),
      text: '리듀서 함수를 작성해봐요~',
    },
  ],
};

// 액션 타입 (상수)
const CREATE_MESSAGE = '메시지/추가';
const DELETE_MESSAGE = '메시지/삭제';
const EDIT_MESSAGE = '메시지/수정';
const SELECT_EDIT_MESSAGE = '메시지/수정/선택';

// 액션 크리에이터(함수)
export const createMessage = (text) => ({
  type: CREATE_MESSAGE,
  payload: {
    id: crypto.randomUUID,
    text,
  },
});

export const deleteMessage = (deleteId) => ({
  type: DELETE_MESSAGE,
  payload: deleteId,
});

export const selectEditMessage = (selectedMessage) => ({
  type: SELECT_EDIT_MESSAGE,
  payload: selectedMessage,
});

export const editMessage = (editedMessage) => ({
  type: EDIT_MESSAGE,
  payload: editedMessage,
});

// 리듀서(상태 관리 함수)
export const manageMessages = (state, action /* { type, payload? } */) => {
  // 메시지/추가
  switch (action.type) {
    case CREATE_MESSAGE:
      // 새로운 상태가 반환
      return {
        ...state,
        messages: [action.payload /* new message */, ...state.messages],
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
