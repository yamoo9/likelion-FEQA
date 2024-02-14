import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import router from '@/routes';

// [학습 순서]
// 1. React Router 라이브러리 소개 ✅
// 2. React Router 라이브러리 설치 (https://bit.ly/3SABrdf) ✅
//    pnpm add react-router-dom
//
// 3. 브라우저 라우터(Browser Router) 구성 ✅
// 3-1. 라우터 생성 ← createBrowserRouter (https://bit.ly/3w6XS27)
// 3-2. 라우터 공급 ← RouterProvider (https://bit.ly/42K41xG)
// 3-3. JSX 루트(routes) ← createRoutesFromElements (https://bit.ly/3SD7QA7)
//
// 4. 루트(Routes) 구성 ✅
// 4-1. 루트 레이아웃(Root Layout) 컴포넌트
// 4-2. 루트 레이아웃(Root Layout)에 포함할 컴포넌트 추가 (예: Header, Footer, Sidebar 등)
//
// 5. 중첩된 루트(Nested Routes) 구성 ✅
// 5-2. 중첩된 루트(nested route)를 포함할 children 구성 (https://bit.ly/3w6XS27)
// 5-3. 루트 레이아웃에 중첩된 루트를 배출할 Outlet 컴포넌트 구성 (https://bit.ly/3SVdr65)
// 5-4. 레이아웃 루트 (https://bit.ly/49u3vpB)
//
// 6. 앱 내비게이션 (App Navigation) ✅
// 6-1. URL 세그먼트(segments) [`/`, `/admin`, `/products/vegetable`]
// 6-2. Link 컴포넌트를 사용해 페이지 내비게이션 (https://bit.ly/48dEy0z)
// 6-3. NavLink 컴포넌트를 활용해 내비게이션 (https://bit.ly/4bBuqBz)
// 6-4. NavLink 활성 상태 클래스 핸들링 (https://bit.ly/3UFbFaC)
// 6-5. 콘텐츠로 바로가기(Skip to content) 링크 (https://bit.ly/49aRkOQ)
// 6-6. 프로그래밍 방식 내비게이션
// 6-6-1. Navigate 컴포넌트 (https://bit.ly/3SVkfk1)
// 6-6-2. useNavigate 훅 (https://bit.ly/3OGex3a)
// 6-7. "찾을 수 없음(Not Found)" 에러 핸들링 (https://bit.ly/48nxdvG)
//
// 7. 검색 엔진 최적화(SEO) → 기계(검색봇) 접근 → 사용자 접근성 향상 ✅
// 7-1. useDocumentTitle 커스텀 훅
// 7-2. react-helmet-async 활용 (https://bit.ly/3OEnLg4)
//
// 8. 데이터 가져오기(Fetching Data) ✅
// 8-1. 비동기 데이터 요청 (https://bit.ly/3STyWnQ)
// 8-2. URL 매개변수 ← useLoaderData 훅 (https://bit.ly/3OFjUQ5)
// 8-3. URLSearchParams (https://mzl.la/48elZJJ) ← useSearchParams 훅 (https://bit.ly/3uwBqiu)
// URL의 쿼리 문자열(Query String)
// https://www.google.com/search?q=gemini&newwindow=1&sca_esv=sca_esv_fallback&sxsrf=ACQVn0-fAoONNmgPvbdYGQ-dGX7d5xvOMw%3A1707886223439&source=hp&ei=j0bMZZ-uBrbg2roPl4OR0Ag&iflsig=ANes7DEAAAAAZcxUn7EdFE9E43gPteQjRrqfBDNPvoMz&udm=&oq=gemin&gs_lp=Egdnd3Mtd2l6IgVnZW1pbioCCAAyCxAAGIAEGLEDGIMBMgQQABgDMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgQQABgDMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyBBAAGAMyBBAAGANI7hJQAFiLBnAAeACQAQCYAYABoAHVBKoBAzAuNbgBA8gBAPgBAcICERAuGIAEGLEDGIMBGMcBGNEDwgIOEC4YgAQYsQMYgwEY1ALCAggQABiABBixA8ICCxAuGIAEGMcBGNED&sclient=gws-wiz
// ?q=gemini&newwindow=1&sca_esv=sca_esv_fallback&sxsrf=ACQVn0-fAoONNmgPvbdYGQ-dGX7d5xvOMw%3A1707886223439&source=hp&ei=j0bMZZ-uBrbg2roPl4OR0Ag&iflsig=ANes7DEAAAAAZcxUn7EdFE9E43gPteQjRrqfBDNPvoMz&udm=&oq=gemin&gs_lp=Egdnd3Mtd2l6IgVnZW1pbioCCAAyCxAAGIAEGLEDGIMBMgQQABgDMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgQQABgDMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyBBAAGAMyBBAAGANI7hJQAFiLBnAAeACQAQCYAYABoAHVBKoBAzAuNbgBA8gBAPgBAcICERAuGIAEGLEDGIMBGMcBGNEDwgIOEC4YgAQYsQMYgwEY1ALCAggQABiABBixA8ICCxAuGIAEGMcBGNED&sclient=gws-wiz
//
// 9. 다이내믹 루트(Dynamic Routes) 구성 ✅
// 9-1. 다이내믹 세그먼트 `:` (https://bit.ly/49y9wl7)
// 9-2. useParams 훅 (https://bit.ly/3HYKsbq)
// 9-3. 인덱스 루트 (https://bit.ly/3UB7NHu)
//
// 10. 데이터 뮤테이션(Data Mutations) ✅
// 10-1. Form 컴포넌트 (https://bit.ly/3OJlYXo)
// 10-2. 뮤테이션 서브미션 (https://bit.ly/3wgh8KM)
// 10-3. 폼 액션 핸들링 (https://bit.ly/3wfeMMl)
// 10-4. 폼 액션 ← 리퀘스트 (https://bit.ly/3w70RHR)
// 10-5. 폼 상태 접근 (https://bit.ly/4bxAsmX)
//
// 11. 루트 보호 (Protected Routes)
// 11-1. 인증된 사용자만 이용 가능하도록 루트 보호
// 11-2. 권한 사용자만 이용 가능하도록 루트 보호
// 11-3. ProtectedRoute 컴포넌트 (https://bit.ly/3wfn7iS)

function Exercise() {
  return (
    <HelmetProvider>
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl">클라이언트 사이드 라우팅(CSR)</h2>
        <p className="text-xs">
          클라이언트 환경에서 라우팅되는 싱글 페이지 애플리케이션(SPA) 구성
        </p>
      </div>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default Exercise;
