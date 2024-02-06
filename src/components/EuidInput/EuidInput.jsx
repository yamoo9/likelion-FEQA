import { useId, forwardRef, useImperativeHandle, useRef } from 'react';
import { A11yHidden } from '@/components';

function EuidInput(
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
  ref
) {
  // 컴포넌트 내부에 감춰진(접근 가능하지 않은)
  // DOM 노드 노출하고 싶지 않다면 고려 (옵션)
  useImperativeHandle(
    ref,
    () => {
      if (type === 'radio') {
        console.log('뭔가 수행');
      }

      return {
        focus() {
          inputRef.current.focus();
        },
        styling(cssRules) {
          inputRef.current.style.cssText = cssRules;
        },
      };
    },
    [type]
  );

  const inputRef = useRef(null);
  const labelRef = useRef(null);

  const id = useId();

  let labelElement = (
    <label ref={labelRef} htmlFor={id}>
      {label}
    </label>
  );

  if (hiddenLabel) {
    labelElement = (
      <A11yHidden ref={labelRef} as="label" htmlFor={id}>
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
        ref={inputRef}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="focus:border-solid focus:border-indigo-500 focus:border-2"
        {...inputProps}
      />
    </ComponentName>
  );
}

export default forwardRef(EuidInput);
