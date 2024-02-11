[← 뒤로](../README.md)

## 학습 주제

Next.js 파일 시스템 기반 라우팅

- [ ] 라우팅 파일 컨벤션 ([참고](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions))
  - [ ] app 디렉토리 내부에 파일 컨벤션 위반 파일은 호스팅 되지 않음.<br/>(예: `app/users/users.module.css`)
  - [ ] 페이지 관련 컴포넌트를 특정 페이지 디렉토리 안에서 관리 가능.<br/>(예: `app/users/UserTable.tsx`)
- [ ] 다이내믹 루트(dynamic route) 정의
  - [ ] 동적 경로 설정 방법 (`app/users/[user-id]/`)
  - [ ] 페이지 컴포넌트의 params 속성 ([참고](https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional))
  - [ ] 중첩된 페이지 컴포넌트 구성 (예: `/users/[user-id]/photos/[photo-id]`)
  - [ ] 포괄적인 세그먼트(all segments) 구성 (예: `/products/[...slug]/` | [참고](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments))
  - [ ] 선택적 포괄 세그먼트(segments) 구성 (예: `/products/[[...slug]]/` | [참고](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments))
- [ ] 쿼리 스트링(query string) 파라미터(parameter)
  - [ ] 서버 컴포넌트: searchParams 속성 활용 ([참고](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional))
    - [ ] 정렬(sortOrder) 쿼리 스트링 활용 (`/users?sortOrder=이름`)
    - [ ] [fast-sort](https://www.npmjs.com/package/fast-sort) 라이브러리 활용
  - [ ] 클라이언트 컴포넌트: useSearchParams 훅 ([참고](https://nextjs.org/docs/app/api-reference/functions/use-search-params))
- [ ] 레이아웃(layout)
  - [ ] 특정 페이지 레이아웃 생성 (예: 관리자 페이지 레이아웃(`app/admin`))
  - [ ] 글로벌 스타일 파일에 기본(base) 레이어 스타일 확장 (예: h1, h2 등)
- [ ] 내비게이션(navigation)
  - [ ] 글로벌 내비게이션 바 컴포넌트 (GlobalNavBar → RootLayout에 배치)
  - [ ] Link 컴포너트 ([참고](https://nextjs.org/docs/app/api-reference/components/link))
    - 대상 페이지의 콘텐츠 및 리소스만 다운로드
    - 성능 향상을 위해 프리패치(미리 가져오기, prefetch) 처리 → 빌드(build) 타임에서만 확인 가능 
    - 페이지 캐싱(caching) 데이터를 클라이언트에 저장
    - 페이지를 새로고침 할 경우, 저장된 클라이언트 캐시에서 삭제 후 다시 서버에 요청
  - [ ] 프로그래밍 방식 링크
    - 버튼 클릭 또는 폼 전송 이벤트에 의해 프로그래밍 방식으로 내비게이션 해야 할 경우 사용
  - [ ] 브라우저 이벤트 : 클라이언트 컴포넌트
    - [ ] `use client` 디렉티브 (참고: [nextjs.org](https://nextjs.org/docs/app/building-your-application/rendering/client-components#using-client-components-in-nextjs), 참고: [react.dev](https://react.dev/reference/react/use-client))
    - [ ] useRouter 훅 ([참고](https://nextjs.org/docs/app/api-reference/functions/use-router))
- [ ] 로딩(loading) UI 표시
  - [ ] [Suspense](https://react.dev/reference/react/Suspense)를 사용한 폴백(fallback) 처리
  - [ ] 로딩(loading) 컴포넌트 파일을 작성하여 처리
  - [ ] Daisy UI를 사용해 로딩 상태 표시 ([참고](https://daisyui.com/components/loading/))
- [ ] 에러 핸들링(error handling)
  - [ ] 찾지 못하는(not found) 에러 핸들링
    - [ ] 커스텀 404 페이지 작성 ([참고](https://nextjs.org/docs/app/api-reference/file-conventions/loading))
    - [ ] 페이지 별, 404 페이지 작성
  - [ ] 예기치 못한(un expected) 에러 헨들링
    - [ ] 네트워크 요청 실패 임의로 오류 구성
    - [ ] 빌드 타임에서 표시될 오류 메시지 확인
    - [ ] 사용자 정의 오류 정보 안내 페이지 작성 ([참고](https://nextjs.org/docs/app/api-reference/file-conventions/error))