import withTooltip from '@/hoc/withTooltip';

// 함수 컴포넌트
function ToolTip({ isShow, toggle }) {
  return <div onClick={toggle}>{isShow ? '툴팁' : 'ToolTip'}</div>;
}

// 고차 컴포넌트
const MyTooltip = withTooltip(ToolTip);

function App() {
  return (
    <div className="flex flex-col gap-5 my-5">
      <MyTooltip />
      <MyTooltip />
      <MyTooltip />
      <MyTooltip />
      <MyTooltip />
      <MyTooltip />
      <MyTooltip />
    </div>
  );
}

export default App;
