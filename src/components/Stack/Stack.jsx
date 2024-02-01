import classes from './Stack.module.css';

export default function Stack({
  as: Component = 'div',
  className: customClassNames = '',
  style: 컴포넌트_사용자의_커스텀스타일,
  vertical = false,
  gap,
  my: marginBlock,
  mx: marginInline,
  ...restProps
}) {
  
  const 컴포넌트_클래스이름 = `${classes.Stack} ${customClassNames}`.trim();

  const 컴폰넌트_제작자의_스타일 = {};

  if (vertical) {
    컴폰넌트_제작자의_스타일['--direction'] = 'column';
  }

  if (gap || gap === 0) {
    컴폰넌트_제작자의_스타일['--gap'] = `${gap}px`;
  }

  if (marginBlock || marginBlock === 0) {
    컴폰넌트_제작자의_스타일['--marginBlock'] = `${marginBlock}px`;
  }

  
  if (marginInline || marginInline === 0) {
    컴폰넌트_제작자의_스타일['--marginInline'] = `${marginInline}px`;
  }

  const 컴포넌트_스타일_옵션 = {
    ...컴폰넌트_제작자의_스타일,
    ...컴포넌트_사용자의_커스텀스타일,
  };

  return (
    <Component
      className={컴포넌트_클래스이름}
      style={컴포넌트_스타일_옵션}
      {...restProps}
    />
  );
}
