import styles from './A11yHidden.module.css';

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

export default A11yHidden;
