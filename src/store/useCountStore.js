import { create } from 'zustand';

// 상태 초기 값
const initialState = {
  count: 0,
};

// 상태 생성 함수
const createState = (set) => ({
  // 초기 상태 값
  ...initialState,
  // 상태 업데이트 함수(들)
  // 상태 업데이트 요청(리액트 렌더 트리거 => 리-렌더링)
  // ❌ setState(nextState)
  // ✅ setState((prevState) => nextState)
  // [Z] setState((prevState) => nextState)
  plusMultiline: () => {
    set((state /* prevState */) => {
      // nextState
      return {
        count: state.count + 1,
      };
    });
  },
  plus: () => set((state) => ({ count: state.count + 1 })),
  minus: () => set((state) => ({ count: state.count - 1 })),
  set: (countValue) => set(() => ({ count: countValue })),
  reset: () => set(() => initialState),
});

// 스토어 생성 => 훅 함수 반환
const useCountStore = create(createState);

// 생성된 훅 함수를 어디서나 사용 가능
// 글로벌 상태 관리
export default useCountStore;
