/** @type {import('next').NextConfig} */
const nextConfig = {
  // React.StrictMode 활성화
  reactStrictMode: true,
  typescript: {
    // 프로젝트 빌드 시, 타입 오류가 발생해도 빌드가 되도록 허용 *주의!*
    // ignoreBuildErrors: true,
  },
  experimental: {
    // Next.js 라우팅 사용 시, 링크 입력할 때 오타 및 기타 오류 방지를 위한 타입 안정성 향상
    // https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links
    typedRoutes: true,
  },
};

export default nextConfig;
