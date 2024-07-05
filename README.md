# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

### Requirements

- Header, Footer와 같은 공통 컴포넌트 만들기(모든 페이지에서 Header, Footer 보여질 수 있게 적용)
- 각 Url Path별로 페이지 만들기
  - 메인 페이지(/)
    - Theme 카테고리 섹션 추가
      - Theme 카테고리 Item을 클릭 시 Theme 페이지(/theme/:themeKey)로 이동
    - 실시간 급상승 선물랭킹 추가
      - 필터 기능을 hooks를 사용하여 구현(ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
      - 상품 목록을 처음에는 6개만 보여지게 함. 더보기를 누르는 경우 상품 목록을 더 보여줌(접기 버튼을 누르면 다시 6개만 보여지게 함)
  - Theme 페이지(/theme/:themeKey)
    - Header 섹션을 추가
      - 재사용성을 고려하여 Header 섹션을 만듦.(themeKey에 따라 label,title,description, backgroundColor가 달라짐)
    - 상품 목록 섹션을 추가
  - 로그인 페이지(/login)
    - ID와 PW를 입력하면 로그인이 되도록 구현(ID와 PW는 아무 값을 입력해도 통과됨)
  - 나의 페이지(/my-account)
    - 로그아웃을 할 수 있는 버튼 추가

## Step2

### Requirements

- 로그인 페이지에서 ID와 PW를 입력하면 직전 페이지로 Redirect 됨
- Fake 로그인 기능 구현
  - 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 authToken key에 저장
  - 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직 추가(ContextAPI 활용)
  - Header에서 로그인 한 경우 내 계정을 로그인하지 않은 경우 로그인 버튼을 추가
  - 내 계정(/my-account) 페이지는 로그인 한 사람만 접근 가능하게 함(로그인 하지 않은 유저는 로그인 페이지로 연결)
  - 내 계정 페이지에서 로그아웃을 할 수 있게 함(로그아웃 후 메인 페이지(/)로 Redirect 되도록 함)

## Step3

### Requirements

- 질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?

  > SPA(Single Page Application) → CSR로 렌더링\
  > 하나의 페이지로 구성된 웹 애플리케이션으로 서버에서 필요한 데이터만 비동기로 받아와서 동적으로 현재 화면에 다시 렌더링 하는 방식

  > React Router\
  > 사용자가 입력한 주소를 감지하는 역할을 하며, 여러 환경에서 동작할 수 있도록 여러 종류의 라우터 컴포넌트를 제공함

  spa는 사용자가 요청한 페이지에 따라 필요한 데이터를 받아와서 페이지를 보여줘야 하는데 React Router를 사용하지 않는다면 개발자가 직접 라우터 관련 기능들을 구현해야되는 번거로움이 생긴다.

- 질문 2. 리액트 Context나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요)

  > **리액트 Context / Redux** : 전역 상태 관리 도구

  - 웹 전체적으로 테마 정보가 있을 때 유지하기 위해 사용할 수 있다. 왜냐하면 테마는 여러 컴포넌트에서 사용할 수 있기 때문에 context를 사용하면 쉽게 상태를 관리 할 수 있기 때문이다.

- 질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이면 각각 어떨 때 사용하면 좋을까요?

  > 로컬 스토리지\
  > 브라우저에 데이터를 영구적으로 저장할 수 있음, 삭제해주지 않는 이상 계속 유지됨\
  > 장기적으로 보관해야되는 데이터를 저장해야 될 때

  > 세션 스토리지\
  > 브라우저의 세션 동안 데이터를 저장할 수 있음, 브라우저를 닫으면 데이터가 삭제됨\
  > 페이지 간의 임시 데이터나 폼 데이터를 임시로 저장할 때

  > 쿠키\
  > 웹 서버가 사용자의 웹 브라우저에 저장하는 작은 데이터 조각으로 스토리지에 비해 크기가 작다. 또한 HTTP 요청과 함께 서버로 자동으로 전송됨\
  > 서버와 클라이언트 간의 정보를 주고 받을 때, 민감한 정보일 때
