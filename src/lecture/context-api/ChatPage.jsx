import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ChatRoomList from './ChatRoomList';
import NavBar from './NavBar';

// 새로운 JSX 변환(transform) 엔진 사용하기 때문 (v17+)
// https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

// [학습 주제]
// 3. 컨텍스트 API 활용 (글로벌 또는 특정 컨텍스트 상태 관리)
// 3-1. 컨텍스트 생성
// const INITIAL_CHAT_CONTEXT_VALUE = {
//   userInfo: {
//     id: 'temp',
//     name: '언노운',
//     role: 'GUEST',
//   },
//   messages: [],
// };

// [legacy API] ~ 2018
// render(children) props pattern
// <ChatContext.Consumer>
//  { (contextValue) => <div>{contextValue}</div>}
// </ChatContext.Consumer>

export const ChatContext = createContext();

// 3-3. useContext 훅
// 3-4. 컨텍스트 프로바이더 래퍼 컴포넌트
// 3-5. 컨텍스트 값을 공급하는 커스텀 훅
// 3-6. 효율적인 리-렌더링 관리 (프로파일링 & 메모)

let reRenderCount = 0;

function ChatPage() {
  const [users, setUsers] = useState({
    id: 'temp',
    name: '알 수 없음',
    role: 'GUEST',
  });

  const updateUsers = useCallback(() => {
    setUsers({
      id: 'Gby5LfLcaLXoqBSMP9aubbynNdnOem26DTiCETf0Gt8=',
      name: '박하늘',
      role: 'MEMBER',
    });
  }, []);

  const compareRef = useRef({
    prepareUpdateUsers: null,
  });

  useEffect(() => {
    console.log('prepareUpdateUsers = ', compareRef.current.prepareUpdateUsers);
    console.log('updateUsers = ', updateUsers);

    console.log(
      ++reRenderCount,
      Object.is(updateUsers, compareRef.current.prepareUpdateUsers)
        ? '동일 참조'
        : '동일 참조 아님'
    );

    // 이전 렌더링에서의 updateUsers 함수를 compareRef.current.prepareUpdateUsers 기억(참조) : 다음 렌더링 시, 비교하기 위해서
    compareRef.current.prepareUpdateUsers = updateUsers;
  });

  const [messages, setMessages] = useState(['친구야!!! 우리 언제 만나?']);

  const updateMessages = useCallback((newMessage) => {
    setMessages((messages) => [...messages, newMessage]);
  }, []);

  // 3-2-1. 컨텍스트 내부에 공급(provide)할 값(value)
  // 기억하기 전 (리-렌더링 할 때 마다 새로운 객체가 생성)
  // const chatValue = {
  //   users, // read
  //   updateUsers, // write
  //   messages, // read
  //   updateMessages, // write
  // };

  // 기억한 이후 (컨텍스트의 참조 값이 변경되지 않으면 기억된 값을 반환)
  const chatValue = useMemo(
    () => /* 기억할 값 */ ({
      users, // read
      updateUsers, // write
      messages, // read
      updateMessages, // write
    }),
    [messages, updateMessages, updateUsers, users]
  );

  // 3-2-2. 컨텍스트 프로바이더 컴포넌트로 컨텍스트 값 공급
  return (
    <ChatContext.Provider value={chatValue}>
      <div className="flex flex-col space-y-5 bg-slate-100 text-slate-800 p-5 shadow-sm">
        <h3 className="text-xl font-extralight">ChatPage</h3>
        <NavBar />
        <ChatRoomList />
      </div>
    </ChatContext.Provider>
  );
}

export default ChatPage;
