# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

### 📝Requirements

- [x] Header, Footer 컴포넌트 생성
- [x] Url Path 별 페이지 생성- 메인 페이지 (**`/`**)
- [x] Url Path 별 페이지 생성 - Theme 페이지(**`/theme/:themeKey`**)
- [x] Url Path 별 페이지 생성 - 로그인 페이지(**`/login`**)
- [x] Url Path 별 페이지 생성 - 나의 페이지(**`/my-account`**)

## Week 2. 2단계 - 인증 프로세스 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/FP3ilWQ6)

### 📝Requirements

- [ ] Redirect 기능
- [ ] Fake 로그인 기능

## Week 2. 3단계 - 질문의 답변을 README에 작성

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/FP3ilWQ6)

### 📝Requirements

질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?

- SPA(Single Page Applicatoin) 프로젝트는 페이지가 하나이기 때문에 페이지 이동이 불가능하다. 하지만, 이렇게 페이지가 하나인 경우에도 일반 웹 사이트처럼 URL에 따른 페이지 이동을 할 수 있게 해주는 기능이 React Router 이다. 따라서, React Router를 사용하지 않으면 URL 경로를 관리하기 어려워진다. 즉, 사용자가 브라우저의 뒤로 가기, 앞으로 가기 버튼을 사용할 때 원하는 화면으로 이동하지 않거나, 전체 페이지가 새로고침될 수 있다는 것을 뜻한다. 또한, 사용자가 특정 URL로 직접 접근하거나 페이지를 북마크할 수 없게 되어 사용자 경험이 저하될 수 있다.

질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)

- 리액트 Context
  전역 테마 설정: 테마 설정을 Context로 관리하면, 테마 변경 시 모든 관련 컴포넌트가 자동으로 리렌더링되어 일관된 UI를 유지할 수 있다.
  다국어 지원: 번역 데이터를 전역에서 관리하고, 필요한 컴포넌트에서 이를 쉽게 접근할 수 있도록 할 때 Context를 사용할 수 있다.

- Redux
  복잡한 상태 관리: 여러 컴포넌트에서 상태를 공유해야 하거나, 상태 변경 로직이 복잡한 경우 Redux를 사용하면 상태 관리를 더욱 체계적이고 예측 가능하게 할 수 있다.

질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?

- Local Storage
  브라우저에 영구적으로 저장되며, 사용자가 삭제하지 않는 한 데이터가 유지된다.
  따라서 브라우저 탭이나 창을 닫아도 데이터가 유지된다.
  사용자의 테마 설정, 언어 설정 등 영구적으로 저장해야 하는 사용자 설정 데이터를 저장할 때 유용하다.

- Session Storage
  브라우저 세션 동안만 데이터가 유지되며, 브라우저 탭이나 창을 닫으면 데이터가 삭제된다.
  현재 페이지에서 입력한 양식 데이터 등을 저장할 때와 같이 사용자가 사이트를 탐색하는 동안만 필요한 임시 데이터를 저장할 때 유용하다.

브라우저에서 같은 웹 사이트를 여러 탭이나 창에 띄우면, 여러 개의 세션 스토리지에 데이터가 서로 격리되어 저장되며, 각 탭이나 창이 닫힐 때 저장해 둔 데이터도 같이 소멸된다.
반면, 로컬 스토리지는 **한 브라우저 안에서** 여러 탭이나 창 간에 데이터가 서로 공유되며 탭이나 창을 닫아도 데이터는 브라우저에 그대로 남아 있는다.

- Cookies
  웹 서버가 사용자의 웹 브라우저에 저장하는 작은 데이터 조각이다.
  HTTP 요청과 함께 서버에 자동으로 전송된다.
  만료 시간을 지정할 수 있으며, 만료 시간이 지나면 자동으로 삭제된다.
  사용자 인증 토큰, 세션 ID와 같이 서버와 클라이언트 간에 주고받아야 하는 데이터 저장에 유용하다.
