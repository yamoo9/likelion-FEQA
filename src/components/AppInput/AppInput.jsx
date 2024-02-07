import { A11yHidden } from '@/components';
import {
  objectOf,
  any,
  exact,
  oneOf,
  number,
  oneOfType,
  string,
  elementType,
  func,
  object,
  bool,
} from 'prop-types';
import { useId } from 'react';

function AppInput(
  /* props */
  {
    forwardRef = null,
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
  }
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
        ref={forwardRef}
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

AppInput.propTypes = {
  forwardRef: oneOfType([oneOf([null]), exact({ current: any })]),
  as: oneOfType([
    string,
    // oneOf(['a', 'p', 'h1', 'h2', 'div', 'span', 'table']),
    elementType,
  ]),
  name: string.isRequired,
  type: oneOf(['text', 'range', 'search', 'email', 'password', 'radio']),
  lable: string.isRequired,
  placeholder: string.isRequired,
  value: string,
  onChange: func,
  gap: oneOfType([number, string]),
  style: object,
  hiddenLabel: bool,
  inputProps: object,
  restProps: objectOf(any),
};

export default AppInput;
