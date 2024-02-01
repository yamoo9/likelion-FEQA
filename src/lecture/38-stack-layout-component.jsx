import { Stack } from '@/components';
import './38-stack-layout-component.css';
import { useId, useState } from 'react';

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
  types:
    '밀라노 스폰티니 피자, 시찰리아 칼초네 피자, 시카고 피자, 페페로니 피자, 하와이안 피자'.split(
      ', '
    ),
  toppings:
    '새우, 고구마, 감자, 올리브, 페페로니, 치즈, 파인애플, 가지, 불고기'.split(
      ', '
    ),
};

const INITIAL_ORDER = {
  type: PIZZA.types[0],
  isAllToppings: false,
  toppings: [],
};

// Design is All. All is Design.

function Form() {
  // 주문 폼 상태(like a snapshot) 선언
  const [orderState, setOrderState] = useState(INITIAL_ORDER);

  const handleChangePizzaType = (e) => {
    const { value } = e.target;

    const nextOrderState = {
      ...orderState,
      type: value,
    };

    setOrderState(nextOrderState);
  };

  const handleChangeAllToppings = (e) => {
    setOrderState({
      ...orderState,
      isAllToppings: e.target.checked,
    });
  };

  const handleChangePizzaToppings = (e) => {
    console.log(e.target.value);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    console.log(orderState);
  };

  const handleCancel = () => {
    setOrderState(INITIAL_ORDER);
  };

  return (
    <form onSubmit={handleOrder} onReset={handleCancel}>
      <h3>피자 타입을 선택하세요.</h3>
      {PIZZA.types.map((pizzaType) => (
        <FormChecker
          name="type"
          key={pizzaType}
          value={pizzaType}
          checked={orderState.type === pizzaType}
          onChange={handleChangePizzaType}
        >
          {pizzaType}
        </FormChecker>
      ))}

      <h3>피자 토핑을 추가합니다.</h3>
      <FormChecker
        checkbox
        checked={orderState.isAllToppings}
        onChange={handleChangeAllToppings}
      >
        전체 선택
      </FormChecker>
      {PIZZA.toppings.map((topping) => (
        <FormChecker
          checkbox
          key={topping}
          name="topping"
          value={topping}
          onChange={handleChangePizzaToppings}
        >
          {topping}
        </FormChecker>
      ))}

      <Stack gap={4} my={16}>
        <button type="submit">주문</button>
        <button type="reset">취소</button>
      </Stack>
    </form>
  );
}

function FormChecker({
  as: Component = 'div',
  checkbox = false,
  children,
  ...restProps
}) {
  const id = useId();
  const type = checkbox ? 'checkbox' : 'radio';

  return (
    <Component>
      <input type={type} id={id} {...restProps} />
      <label htmlFor={id}>{children}</label>
    </Component>
  );
}

export default Exercise;
