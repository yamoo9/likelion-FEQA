module.exports = {
  // Next.js가 제공하는 3가지 옵션
  // - next/core-web-vitals (Core Web Vitals 규칙 세트 + Next.js 기본 구성)
  // - next (Next.js 기본 구성)
  // - 확장하지 않음 (사용자 정의 ESLint 구성을 설정할 경우)
  extends: 'next/core-web-vitals',
  // Next.js는 Image 컴포넌트 사용을 권장하므로 <img> 표준 요소를 사용할 경우
  // ESLint에서 오류를 표시합니다. 이 규칙을 사용하고 싶지 않다면 rules 필드에
  // @next/next/no-img-element 규칙을 비활성화 합니다. (참고)
  rules: {
    // '@next/next/no-img-element': 'off',
  },
};
