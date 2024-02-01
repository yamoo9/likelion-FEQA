import { Stack } from '@/components';
import './38-stack-layout-component.css';
import { useId } from 'react';

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

const PIZZA = {
  types: '밀라노 스폰티니 피자, 시찰리아 칼초네 피자, 시카고 피자'.split(', '),
  toppings: '새우, 고구마, 감자, 올리브, 페페로니'.split(', '),
};

function Form() {
  return (
    <form>
      <h3>피자 타입을 선택하세요.</h3>
      <FormChecker name="type">밀라노 스폰티니 피자</FormChecker>
      <FormChecker name="type">시찰리아 칼초네 피자</FormChecker>
      <FormChecker name="type">시카고 피자</FormChecker>

      <h3>피자 토핑을 추가합니다.</h3>
      <FormChecker checkbox>전체 선택</FormChecker>
      <FormChecker checkbox name="topping">
        새우
      </FormChecker>
      <FormChecker checkbox name="topping">
        고구마
      </FormChecker>
      <FormChecker checkbox name="topping">
        감자
      </FormChecker>
      <FormChecker checkbox name="topping">
        올리브
      </FormChecker>
      <FormChecker checkbox name="topping">
        페페로니
      </FormChecker>
    </form>
  );
}

function FormChecker({
  as: Component = 'div',
  checkbox = false,
  children,
  ...restProps
}) {
  let type = 'radio';

  if (checkbox) {
    type = 'checkbox';
  }

  const id = useId();

  return (
    <Component>
      <input type={type} id={id} {...restProps} />
      <label htmlFor={id}>{children}</label>
    </Component>
  );
}

export default Exercise;
