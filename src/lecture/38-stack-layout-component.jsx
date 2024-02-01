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
  toppings: '새우, 고구마, 감자, 올리브, 페페로니'.split(', '),
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
    setOrderState(
      /* nextOrderState step 1 */
      // [1] isAllToppings 상태 업데이트
      // ❌ 리액트가 리-렌더링을 시도합니다.
      (orderState /* { isAllToppings: false } */) => ({
        ...orderState,
        isAllToppings: e.target.checked, // false => true
      })
    );

    setOrderState(
      /* nextOrderState step 2 */
      // [2] toppings 상태 조건부 업데이트
      // ❌ 리액트가 리-렌더링을 시도합니다.
      (orderState /* { isAllToppings: true } */) => ({
        ...orderState,
        toppings: orderState.isAllToppings /* true */ ? PIZZA.toppings : [],
      })
    );

    // 리액트는 효과적인 업데이트를 위해서 배치(일괄) 업데이트
    // 리-렌더링 1회
  };

  const handleChangePizzaToppings = (e) => {
    const { value: topping, checked: isChecked } = e.target;

    console.log('이전 토핑 목록: ', orderState.toppings);

    let nextToppings = [];

    // 사용자가 눌렀을 때 체크되었다
    if (isChecked) {
      // 토핑 추가
      nextToppings = [...orderState.toppings, topping];
    } else {
      // 토핑 삭제
      nextToppings = orderState.toppings.filter((t) => t !== topping);
    }

    const hasFullFilledToppings = nextToppings.length === PIZZA.toppings.length;

    const nextOrderState = {
      ...orderState,
      toppings: nextToppings,
      isAllToppings: hasFullFilledToppings,
    };

    console.log('다음 토핑 목록: ', nextToppings, hasFullFilledToppings);

    setOrderState(nextOrderState);
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
          checked={orderState.toppings.includes(topping)}
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
