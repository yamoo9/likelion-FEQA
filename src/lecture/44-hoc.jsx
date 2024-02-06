import withTooltip from '@/hoc/withTooltip';

const MyTooltip = withTooltip(function ToolTip({ isShow, toggle }) {
  return <div onClick={toggle}>{isShow ? '툴팁' : 'ToolTip'}</div>;
});

function App() {
  return (
    <div className="flex flex-col gap-5 my-5">
      <MyTooltip />
      <MyTooltip />
      <MyTooltip />
      <MyTooltip />
      <MyTooltip />
    </div>
  );
}

export default App;
