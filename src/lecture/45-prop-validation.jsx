import { CatCardList, A11yHidden, Avatar, Graph } from '@/components';

function Exercise() {
  return (
    <div>
      <h2>컴포넌트 속성 타입 검사</h2>
      <A11yHidden>hey</A11yHidden>
      {/* <Avatar /> */}
      <Graph />
      <CatCardList />
      {/* <CatCardList catList={[{ id: 'any', value: 'unknown' }]} /> */}
    </div>
  );
}

export default Exercise;
