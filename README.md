# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

## 과제 요구 사항

### step1

[x] Header, Footer와 같은 공통 컴포넌트를 만들어요.
[x] 각 Url Path별로 페이지를 만들어요.

- 메인 페이지 (/)
  [x] Theme 카테고리 섹션을 추가해요.
  [x] Theme 카테고리 Item을 클릭 시 Theme 페이지(/theme/:themeKey)로 이동해요.
  [x] 실시간 급상승 선물랭킹을 추가해요.
  [x] 필터 기능을 hooks를 사용하여 구현해요. (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
  [x] 상품 목록을 처음에는 6개만 보여지게 해요. 더보기를 누르는 경우 상품 목록을 더 보여줘요.
- Theme 페이지(/theme/:themeKey)
  [x] Header 섹션을 추가해요.
  [x] 재사용성을 고려하여 Header 섹션을 만들어요. (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
  [x] 상품 목록 섹션을 추가해요. +로그인 페이지(/login)
  [x] ID와 PW를 입력하면 로그인이 되도록 구현해요. (ID와 PW는 아무 값을 입력해도 통과되도록 해요.)
- 나의 페이지(/my-account)
  [x] 로그아웃을 할 수있는 버튼을 추가해요.

### step2

[x] 로그인 페이지에서 ID와 PW를 입력하면 직전 페이지로 Redirect 되도록 해요.

- Fake 로그인 기능을 구현해요.
  [x] 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 authToken key에 저장해요.
  [X] 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직을 추가해요.
  [x] Header에서 로그인 한 경우 내 계정을 로그인 하지 않은 경우 로그인 버튼을 추가해요.
  [x] 내 계정(/my-account) 페이지는 로그인 한 사람만 접근 가능하게 해요. (로그인 하지 않은 유저는 로그인 페이지로 연결해요)
  [x] 내 계정 페이지에서 로그아웃을 할 수 있도록 해요. (로그아웃 후 메인 페이지(/) 로 Redirect 되도록 해요)

### step3

- 질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?

  1. '/theme/:themeKey'와 같은 동적 경로를 처리하는것이 어려워집니다.
  2. 브라우저 뒤로가기와 앞으로 가기 등의 동작을 하는것이 어려워집니다.
  3. 링크를 사용하여 페이지를 교체하는 경우 전체 페이지를 교체하는 문제가 발생합니다.

- 질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)

  Context와 Redux는 상태 관리 라이브러리로 전역적으로 사용할 데이터가 있을 때 사용합니다. Context는 작은 범위의 상태를 공유할 때 사용하고, Redux는 애플리케이션 전반에 걸쳐 상태를 관리할때 사용합니다. Context의 사용 예시로는 테마를 관리한느 경우 사용할 수 있습니다. 테마를 컴포넌트에 전달하려면 불필요한 컴포넌트를 통과하여 전달해야하는 문제점이 있습니다. Context를 사용할 경우 중간 컴포넌트에 값을 전달하지 않고도 하위 트리에 값을 전달할 수 있습니다.

- 질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?

  - Local Storage: 5MB의 저장 공간을 제공하며 브라우저를 닫아도 삭제되지 않습니다. 장기적으로 데이터가 필요할때 또는 오프라인 데이터 저장에 사용합니다.
  - Session Storage: 5MB의 저장 공간을 제공하며 브라우저 세션 동안만 유지되어 브라우저를 닫으면 데이터가 사라집니다. 특정 페이지에서 입력한 데이터를 다른 페이지로 전달하거나 로그인 상태 유지를 할때 사용합니다.
  - Cookies: 4KB의 저장 공간을 제공하며 만료기간을 명시한 경우 기간 동안 데이터가 유지되고 만료 기간을 설정하지 않은 겅우는 브라우저 세션이 끝날때 까지만 유지됩니다. 로그인 상태를 유지하거나 사용자 행동 추적, 데이터 수집 등에 사용합니다.
