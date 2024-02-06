import withTooltip from '@/hoc/withTooltip';
import { useTooltip } from '@/hooks';

// 함수 컴포넌트 + 훅
function ToolTip() {
  const { isShow, toggle } = useTooltip();
  return <div onClick={toggle}>{isShow ? '툴팁' : 'ToolTip'}</div>;
}

// 고차 컴포넌트 (HOC + 함수 컴포넌트)
const MyTooltip = withTooltip(function ToolTip({ isShow, toggle }) {
  return <div onClick={toggle}>{isShow ? '툴팁' : 'ToolTip'}</div>;
});

function App() {
  return (
    <>
      <h2>React Hook</h2>
      <div className="flex flex-col gap-5 my-5">
        <ToolTip />
        <ToolTip />
        <ToolTip />
        <ToolTip />
        <ToolTip />
        <ToolTip />
        <ToolTip />
      </div>
      <hr />
      <h2>
        <abbr title="Higher Order Component">HOC</abbr>
      </h2>
      <div className="flex flex-col gap-5 my-5">
        <MyTooltip />
        <MyTooltip />
        <MyTooltip />
        <MyTooltip />
        <MyTooltip />
        <MyTooltip />
        <MyTooltip />
      </div>
    </>
  );
}

export default App;
