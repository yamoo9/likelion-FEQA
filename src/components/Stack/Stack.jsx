import classes from './Stack.module.css';

export default function Stack({
  as: Component = 'div',
  className: customClassNames = '',
  vertical = false,
  ...restProps
}) {
  const classNames = `${classes.Stack} ${customClassNames}`.trim();

  console.log(vertical);

  return <Component className={classNames} {...restProps} />;
}
