import { Stack } from '@/components';
import './38-stack-layout-component.css';
import { useId, useState } from 'react';

function Exercise() {
  return (
    <>
      <FormControlExample />
    </>
  );
}

/* -------------------------------------------------------------------------- */

function FormControlExample() {
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

const LIMIT_TOPPING_COUNT = 3;

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
    const { checked } = e.target;

    const nextOrderState = {
      ...orderState,
      isAllToppings: checked,
      toppings: checked ? PIZZA.toppings : [],
    };

    setOrderState(nextOrderState);
  };

  const handleChangePizzaToppings = (e) => {
    const { value: topping, /* checked: isChecked */ } = e.target;

    // 리액트 입장에서 현재 토핑 집합의 총 갯수
    const toppingsCount = orderState.toppings.length;
    // console.log(toppingsCount);

    // 리액트의 상태 업데이트 논리적인 흐름
    const isToppingChecked = orderState.toppings.includes(topping);

    // 리액트의 현재 상태 vs. DOM의 현재 상태(리액트의 다음 상태)
    // console.log({ isToppingChecked, isChecked });

    // 만약 토핑 선택 갯수를 3개로 제한하는 경우, 조건 처리
    if (toppingsCount === LIMIT_TOPPING_COUNT && !isToppingChecked) {
      // 사용자에게 경고 메시지를 표시하고 상태 업데이트 중단(return : 함수 종료)
      return alert('현재(업데이트 전) 토핑 갯수가 3개입니다.');
    }

    let nextToppings = [];

    // 사용자가 눌렀을 때 체크되었다
    if (!isToppingChecked) {
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
