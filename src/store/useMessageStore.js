import { create } from 'zustand';

// 메시지 상태 관리
// useMessageStore 훅 함수

// 어떤 상태 관리?
// 어떤 기능
// 1. 메시지 쓰기
// 2. 메시지 선택
// 3. 메시지 수정
// 4. 메시지 삭제

const initialState = {
  messages: [
    {
      id: crypto.randomUUID(),
      text: '츄스탄트(Zustand)를 사용해 글로벌 앱 상태 관리',
    },
  ],
  selectedMessage: null,
};

export const useMessageStore = create((set) => ({
  /* states */
  ...initialState,

  /* updaters */
  add: (newMessage) =>
    set((state) => ({
      messages: [
        {
          id: crypto.randomUUID(),
          text: newMessage,
        },
        ...state.messages,
      ],
    })),

  select: (selectId) =>
    set((state) => ({
      selectedMessage: state.messages.find((m) => m.id === selectId),
    })),

  edit: (editMessage) =>
    set((state) => ({
      messages: state.messages.map((m) =>
        m.id === editMessage.id ? editMessage : m
      ),
      selectedMessage: null,
    })),

  delete: (deleteId) =>
    set((state) => ({
      messages: state.messages.filter((m) => m.id !== deleteId),
    })),
}));
