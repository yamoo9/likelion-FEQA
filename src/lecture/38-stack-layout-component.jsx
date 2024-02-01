import { Stack } from '@/components';
import './38-stack-layout-component.css';

function Exercise() {
  return (
    <Stack vertical gap={16} my={20}>
      <Stack vertical gap={4}>
        <h2>폼 컨트롤 II</h2>
        <p>멀티 체크박스 활용해 피자 주문 폼을 제작</p>
      </Stack>
      <Form />
    </Stack>
  );
}

function Form() {
  return <form>
    <h2>피자 타입을 선택하세요.</h2>
  </form>
}

export default Exercise;
