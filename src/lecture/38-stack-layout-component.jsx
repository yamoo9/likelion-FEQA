import { Stack } from '@/components';
import './38-stack-layout-component.css';

function Exercise() {
  return (
    <Stack gap={0} my={20} mx={20}>
      <h2>Exercise</h2>
      <Stack>
        <p>아이템1</p>
        <p>아이템2</p>
        <p>아이템3</p>
      </Stack>
    </Stack>
  );
}

export default Exercise;
