import bannerImage from '../assets/banner.png';
import { A11yHidden } from '../components';
import classes from './29-a11y-hidden-component.module.css';

const bannerInfo =
  '미래를 향해, 미래를 항해 변화무쌍한 바다를 항해하는 것은 때로는 방향을 바꿔야 할 때도, 또 속도를 조절해야 할 때도 있습니다. 하지만 변함없는 것은 목적지를 향해 꾸준히 항해한다는 것입니다. 미래에도. 미래의 미래에도 행복은 지속가능해야 한다는 믿음으로 SK도 미래를 향해. 미래를 항해하겠습니다.';

// 학습 주제
// - JSX 속성 객체 값으로 props를 전달받는 경우
// - 컴포넌트 외부에서 사용자가 컴포넌트를 사용할 때 스타일 확장
// - className (문자 결합: 템플릿 리터럴 활용)
// - style (객체 결합: { key: value, ... })

function Exercise() {
  return (
    <figure>
      {/* [1] 스타일 확장 시, props 합성 주의! */}
      <DemoImg
        data-testid="demo image"
        aria-label="좋은 세상 만들기"
        className="one two three"
        imageSource={bannerImage}
        ratio={4}
        style={{
          filter: 'blur(4px)',
        }}
      >
        {/* [2] Skip to Content (Links) */}
        <A11yHidden as="a" href="/demo" focusable>
          링크 텍스트
        </A11yHidden>
        <A11yHidden>{bannerInfo}</A11yHidden>
        <A11yHidden as="figcaption">{bannerInfo}</A11yHidden>
      </DemoImg>
    </figure>
  );
}

function DemoImg(
  /* props 객체 */
  {
    imageSource,
    className,
    style,
    width = 1280,
    height = 790,
    ratio = 1,
    children,
    ...restProps
  }
) {
  const classNames = `${classes.demo} ${className}`;
  const defaultStyles = {
    backgroundImage: `url(${imageSource})`,
    width: width ? width / ratio : undefined,
    height: height ? height / ratio : undefined,
    filter: 'blur(0px)',
  };

  console.log(restProps);

  return (
    <div
      {...restProps}
      role="img"
      className={classNames}
      style={{
        // 컴포넌트 개발자가 설정한 기본 스타일 객체
        ...defaultStyles,
        // 컴포넌트 사용자가 설정한 스타일 객체
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Exercise;
