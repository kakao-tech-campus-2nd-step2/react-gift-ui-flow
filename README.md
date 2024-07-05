# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

### 구현해야 할 기능 목록

- Header, Footer와 같은 공통 컴포넌트를 만들어요. (모든 페이지에서 Header와 Footer는 보여질 수 있게 적용해요.)
- 각 Url Path별로 페이지를 만들어요. (결과물과 스타일은 결과 링크 참고)

`메인 페이지 (/)`

- Theme 카테고리 섹션을 추가해요.
  - Theme 카테고리 Item을 클릭 시 Theme 페이지(/theme/:themeKey)로 이동해요.
- 실시간 급상승 선물랭킹을 추가해요.
  - 필터 기능을 hooks를 사용하여 구현해요. (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
  - 상품 목록을 처음에는 6개만 보여지게 해요. 더보기를 누르는 경우 상품 목록을 더 보여줘요. (접기 버튼을 누르면 다시 6개만 보여지게 해요)

`Theme 페이지(/theme/:themeKey)`

- Header 섹션을 추가해요.
  - 재사용성을 고려하여 Header 섹션을 만들어요. (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
- 상품 목록 섹션을 추가해요.

`로그인 페이지(/login)`

- ID와 PW를 입력하면 로그인이 되도록 구현해요. (ID와 PW는 아무 값을 입력해도 통과되도록 해요.)

`나의 페이지(/my-account)`

- 로그아웃을 할 수 있는 버튼을 추가해요.

## Week 2. 2단계 - 인증 프로세스 구현

### 구현해야 할 기능 목록

- 로그인 페이지에서 ID와 PW를 입력하면 직전 페이지로 Redirect 되도록 해요.
- Fake 로그인 기능을 구현해요.
  - 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 authToken key에 저장해요.
  - 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직을 추가해요. (ContextAPI 활용)
  - Header에서 로그인 한 경우 내 계정을 로그인 하지 않은 경우 로그인 버튼을 추가해요.
  - 내 계정(/my-account) 페이지는 로그인 한 사람만 접근 가능하게 해요. (로그인 하지 않은 유저는 로그인 페이지로 연결해요)
  - 내 계정 페이지에서 로그아웃을 할 수 있도록 해요. (로그아웃 후 메인 페이지(/) 로 Redirect 되도록 해요)

## Week 2. 3단계 - 질문의 답변을 README에 작성

질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?

- URL을 통한 페이지 이동 및 브라우저 네비게이션(뒤로 가기, 앞으로 가기 등)이 불가능해진다.
- 각 페이지 컴포넌트가 명확히 구분되지 않아 상태 관리가 복잡해진다.
- 각 페이지별로 필요한 코드만 로드할 수 없어 초기 로드 시간이 증가한다.

질문 2. 리액트 Context나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)

- React Context:
  - 애플리케이션 전체의 다크 모드와 라이트 모드 전환 시 사용하면 좋다.
  - 사용자 설정: 언어 설정, 화면 크기 설정 등 전역 설정 관리 시 사용하면 좋다.
- Redux:
  - 대규모 애플리케이션에서 복잡한 상태 관리 시 사용하면 좋다.
  - 데이터 페칭 및 캐싱: 서버 데이터 페칭 후 전역적으로 캐싱하여 여러 컴포넌트에서 사용 시 유용하다.

질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?

- Local Storage: 데이터가 영구적으로 저장되어 브라우저를 닫아도 유지된다. 사용자 설정, 테마 등 장기적인 데이터를 저장할 때 사용한다.
- Session Storage: 데이터가 세션 동안만 유지되어 탭이나 브라우저를 닫으면 삭제된다. 폼 입력 내용 등 일시적인 데이터를 저장할 때 사용한다.
- Cookies: 서버와의 데이터 교환에 사용되며, 유효기간 설정이 가능하다. 세션 관리, 사용자 인증 정보를 저장할 때 사용된다.
