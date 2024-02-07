import styles from './A11yHidden.module.css';
import PropTypes from 'prop-types';

function A11yHidden({ as: ComponentName = 'span', ...restProps }) {
  return (
    <ComponentName
      className={styles.group}
      style={{
        fontSize: 100,
      }}
      {...restProps}
    />
  );
}

A11yHidden.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};

export default A11yHidden;
