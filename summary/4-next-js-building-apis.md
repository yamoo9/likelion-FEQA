[← 뒤로](../README.md)

## 학습 주제

Next.js APIs 구축 (백엔드 개발 영역: Next.js는 풀스택 프레임워크)

- [ ] APIs → 루트 핸들러 ([참고](https://nextjs.org/docs/app/building-your-application/routing/route-handlers))
- [ ] 콜렉션 읽기(GET)
  - [ ] 캣츠(cats) API 콜렉션 읽기(GET) 요청
  - [ ] 서버의 데이터베이스에 데이터를 요청해서 가져오기
  - [ ] [Response](https://developer.mozilla.org/ko/docs/Web/API/Response)를 확장한 [NextResponse](https://nextjs.org/docs/app/api-reference/functions/next-response) API 활용
  - [ ] 응답이 성공한 경우 "요청 성공(OK, 200)" 응답 ([참고](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/200))
- [ ] GET 레코드 읽기
  - [ ] 특정 필드(예: `id`) 값으로 데이터베이스에서 개별 데이터 읽기(GET) 요청
  - [ ] GET 함수의 매개변수(`request: NextRequest, prop: Props`)
  - [ ] `props.params` 객체에서 필드 정보 읽기
  - [ ] 서버의 데이터베이스에 개별 데이터를 요청해서 가져오기
  - [ ] 데이터가 존재하지 않을 경우, "찾을 수 없음(Not Found, 404 ERROR)" 응답 ([참고](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/404))
- [ ] 레코드 쓰기(POST)
  - [ ] 캣츠(cats) API 레코드 생성(POST) 요청
  - [ ] POST 핸들러의 요청(request) 매개변수 [json()](https://developer.mozilla.org/ko/docs/Web/API/Request#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4_%EB%A9%94%EC%84%9C%EB%93%9C) 메서드(Promise 반환)를 사용해 요청 바디(body) 객체 읽기
  - [ ] [Thunder Client](https://www.thunderclient.com/) VS Code 확장을 사용해 생성(POST) 요청
  - [ ] 새로운 캣(new cat) 생성 요청 처리 
  - [ ] 생성할 데이터 유효성 검사(validation)
  - [ ] 생성 요건에 문제가 있을 경우, "잘못된 요청(Bad Request, 400)" 응답 ([참고](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/400))
  - [ ] 생성 요건에 문제가 없을 경우, "생성됨(Created, 201)" 응답 ([참고](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/201))
- [ ] 레코드 수정(PUT 또는 PATCH)
  - [ ] 특정 필드(예: `id`) 값으로 데이터베이스에서 개별 데이터 수정(PUT) 요청
  - [ ] PUT 함수의 매개변수(`request: NextRequest, prop: Props`)
  - [ ] `props.params` 객체에서 필드 정보 읽기
  - [ ] PUT 핸들러의 요청(request) 매개변수 `json()` 메서드를 사용해 요청 바디(request body) 객체 읽기
  - [ ] 수정 요청 데이터 유효성 검사(validation)
  - [ ] 수정 요건에 문제가 있을 경우, "잘못된 요청(Bad Request, 400)" 응답
  - [ ] 수정할 데이터가 없을 경우, "잘못된 요청(Not Found, 404)" 응답
  - [ ] 수정할 데이터가 있을 경우, 수정 후 "수정 성공(OK, 200)" 응답
- [ ] 레코드 삭제(DELETE)
  - [ ] 특정 필드(예: `id`) 값으로 데이터베이스에서 개별 데이터 수정(DELETE) 요청
  - [ ] DELETE 함수의 매개변수(`request: NextRequest, prop: Props`)
  - [ ] `props.params` 객체에서 필드 정보 읽기
  - [ ] 삭제 요청 데이터 유효성 검사(validation)
  - [ ] 삭제 요건에 문제가 있을 경우, "잘못된 요청(Bad Request, 400)" 응답
  - [ ] 삭제할 데이터가 없을 경우, "잘못된 요청(Not Found, 404)" 응답
  - [ ] 삭제할 데이터가 있을 경우, 삭제 후 "삭제 성공(OK, 200)" 응답
- [ ] 상품(products) APIs 구축 ([PocketBase](https://pocketbase.io) 통합)
  - [ ] 콜렉션 읽기(GET)
  - [ ] 개별 레코드 읽기(GET)
  - [ ] 레코드 쓰기(POST)
  - [ ] 레코드 수정(PUT)
  - [ ] 레코드 삭제(DELETE)
- [ ] 파일 업로드 (with PocketBase)
  - [ ] 파일 전송 폼
  - [ ] 폼 데이터 업로드 요청/응답
- [ ] 요청 타입 유효성 검사(Validation)
  - [ ] TypeScript 프로젝트인 경우, [Zod](https://zod.dev/) 라이브러리를 사용해 유효성 검사
  - [ ] Zod 라이브러리 설치 ([참고](https://zod.dev/?id=installation))
  - [ ] Zod 라이브러리 기본 사용법 ([참고](https://zod.dev/?id=basic-usage))<br/>

##### Zod 라브러리 사용 코드 예시

<details>
  <summary>schema.ts</summary>

  ```ts
  import { z } from 'zod';

  export const catSchema = z.object({
    name: z.string().min(3),
    birthday: z.string(),
    imageSrc: z.string(),
    imageAlt: z.string(),
    badges: z.array(Badge).optional(),
  });

  export const badgeSchema = z.object({
    slug: z.string(),
    label: z.string(),
  });

  export type Cat = z.infer<typeof catSchema>;
  export type Badge = z.infer<typeof badgeSchema>;
  ```
</details>

<details>
  <summary>app/api/cats/[id]/route.ts</summary>

  ```ts
  import { NextRequest, NextResponse } from 'next/server';
  import { catSchema } from './schema';

  const ERROR_INVALID_STATUS = {
    STATUS: 400
  }

  interface Props {
    id: string;
  }

  function PUT(request: NextRequest, { id }: Props) {
    const body = request.json();
    const validation = catSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, ERROR_INVALID_STATUS)
    }

    // ...
  }
  ```
</details>