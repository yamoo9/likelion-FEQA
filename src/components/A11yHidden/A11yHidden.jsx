import S from './A11yHidden.module.css';
import { bool, oneOfType, string, elementType } from 'prop-types';

function A11yHidden({
  as: ComponentName = 'span',
  focusable = false,
  className = '',
  ...restProps
}) {
  const classNames = `${S.a11yHidden} ${
    focusable ? S.focusable : ''
  } ${className}`.trim();

  return <ComponentName className={classNames} {...restProps} />;
}

A11yHidden.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
  focusable: bool,
};

export default A11yHidden;
