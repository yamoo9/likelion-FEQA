import { useId, forwardRef } from 'react';
import { A11yHidden } from '@/components';
// import AppInput from '../AppInput/AppInput';

function FormInput(
  /* props */
  {
    as: ComponentName = 'div',
    name,
    type = 'text',
    label,
    placeholder,
    value,
    onChange,
    gap = 4,
    style: customStyle,
    hiddenLabel = false,
    inputProps = {},
    ...restProps
  },
  /* ref */
  ref
) {
  const id = useId();

  let labelElement = <label htmlFor={id}>{label}</label>;

  if (hiddenLabel) {
    labelElement = (
      <A11yHidden as="label" htmlFor={id}>
        {label}
      </A11yHidden>
    );
  }

  return (
    <ComponentName
      style={{
        display: 'flex',
        gap,
        ...customStyle,
      }}
      {...restProps}
    >
      {labelElement}
      <input
        ref={ref}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </ComponentName>
  );
}

// FormInput.propTypes = AppInput.propTypes;

// forwardRef 고차 함수 -> 고차 컴포넌트 내보내기
// 상위 컴포넌트가 ref 속성을 전달해서
// 컴포넌트 내부의 공개되지 않은 DOM 노드 접근
export default forwardRef(FormInput);
