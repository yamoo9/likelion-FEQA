import classes from './Stack.module.css';

export default function Stack({
  as: Component = 'div',
  className: customClassNames = '',
  style: customStyles,
  vertical = false,
  ...restProps
}) {
  //
  const componentClassNames = `${classes.Stack} ${customClassNames}`.trim();

  const componentStyles = {
    '--direction': vertical ? 'column' : 'row',
    ...customStyles,
  };

  return (
    <Component
      className={componentClassNames}
      style={componentStyles}
      {...restProps}
    />
  );
}
