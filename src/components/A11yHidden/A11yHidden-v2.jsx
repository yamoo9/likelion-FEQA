// 내보낸 모듈이 없다.
// import './A11yHidden.css';

// 내보낸 모듈이 있다면?
import styles from './A11yHidden.module.css'; // local CSS

// - [x] CSS Modules (파일 이름에 접미사 .module / import 모듈 from './*.module.css')
// - [ ] JavaScript 객체 합성의 함정에 유의

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
