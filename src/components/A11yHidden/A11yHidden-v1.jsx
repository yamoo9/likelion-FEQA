// import { createElement as h } from 'react';

function A11yHidden({ as: ComponentName = 'span', ...restProps }) {
  // const ComponentName = as;
  // JSX
  // return <tag style={styles} {...restProps} />;
  return <ComponentName style={styles} {...restProps} />;

  // API) React.createElement(type, props, ...children)
  // e.g) React.createElement('span', {...restProps})
  // e.g) React.createElement('p', {...restProps})
  // e.g) React.createElement(CustomComponentName, { ...restProps })
  // return h(tag, { style: styles, ...restProps });
}

// CSS in JS 도구
// styled-components
// emotion

const styles = {
  overflow: 'hidden',
  position: 'absolute',
  clip: 'rect(0, 0, 0, 0)',
  clipPath: 'circle(0)',
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  border: 0,
  whiteSpace: 'nowrap',
};

export default A11yHidden;
