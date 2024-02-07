import { Avatar, Graph } from '@/components';

function Exercise() {
  return (
    <div>
      <h2>컴포넌트 속성 타입 검사</h2>
      <Avatar photo={'photo.jpg'} isOnline={[]} name={NaN} />
      <Graph />
    </div>
  );
}

export default Exercise;
