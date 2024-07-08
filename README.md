# 🎁카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week2. STEP1 - 페이지 구현

### ✨How to start

- 프로젝트 실행

```
npm install
cd react-gift-ui-flow
npm run start
```

- 스토리북 실행

```
npm install
cd react-gift-ui-flow
npm run storybook
```

### 📜Requirements

- [x] Header, Footer 공통 컴포넌트 구현
  - 모든 페이지에서 Header와 Footer는 보여질 수 있도록 함.
- [x] 각 Url Path별로 페이지 생성
  - 메인 페이지( `/` )
  - [x] Theme 카테고리 섹션 추가
  - [x] Theme 카테고리 Item 클릭 시 Theme 페이지 ( `/theme/:themeKey` )로 이동
- [x] 실시간 급상승 선물랭킹 구현
  - [x] hooks를 사용하여 필터 기능 구현 (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
  - [x] 상품 목록을 처음에는 6개만 보여지게 함.
  - [x] 더보기를 누르는 경우 상품 목록을 더 보여주도록 함. (접기 버튼을 누르면 다시 6개만 보여지게 됨.)
- [x] Theme 페이지 ( `/theme/:themeKey` )
  - [x] 재사용성을 고려하여 Header 섹션 구현 (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
  - [x] 상품 목록 섹션 구현
- [x] 로그인 페이지( `/login` )
  - [x] ID와 PW를 입력하면 로그인이 되도록 구현(ID와 PW는 아무 값을 입력해도 통과되도록 함.)
- [x] 나의 페이지(`/my-account`) 구현
  - [x] 로그아웃 버튼 구현
  - [x] 로그아웃 기능 구현

## Week2. STEP2 - 인증 프로세스

ContextAPI와 SessionStorage를 사용하여 Fake 로그인 기능 구현

### 📜Requirements

- [x] 로그인 페이지에서 ID와 PW를 입력하면 직전 페이지로 Redirect 되도록 함.
- [x] Fake 로그인 기능 구현
  - [x] 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 `authToken` key에 저장
  - [x] 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직을 추가(ContextAPI 사용)
  - [x] Header에서 로그인 한 경우 내 계정을 로그인 하지 않은 경우 로그인 버튼을 추가
  - [x] 내 계정(`/my-account`) 페이지는 로그인 한 사람만 접근 가능하게 함. (로그인 하지 않은 유저는 로그인 페이지로 연결)
  - [x] 내 계정 페이지에서 로그아웃을 할 수 있도록 함. (로그아웃 후 메인 페이지(/) 로 `Redirect` 되도록 함.)

## Week2. STEP3

#### Q1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생할까?

리액트 라우터(React Router)는 리액트 기반의 애플리케이션에서 라우팅을 구현하기 위한 라이브러리이다. SPA에서는 페이지 이동 없이 URL을 변경하고, 해당 URL에 맞는 컨텐츠를 동적으로 렌더링해야 한다.

만약 SPA에서 React Router가 존재하지 않는다면, 몇가지 문제가 발생한다.

1.  React Router는 내부적으로 브라우저의 History API를 사용하여 URL 변경을 관리하고, 해당 경로에 맞는 컴포넌트를 렌더링해준다. 이를 사용하지 않으면 사용자가 페이지 전환을 했을 때 상태가 올바르게 유지되지 않을 수 있다. 따라서 페이지 전환시 수동으로 상태를 관리해야 하고, 각 페이지의 렌더링 조건을 직접 구현해야 하므로 코드가 복잡해지며 오류 발생 가능성이 높아진다.
2.  React Router를 사용하여 서버 사이드 렌더링을 구현함으로써, SPA의 SEO 문제를 개선할 수 있다. 하지만 React Router 없이 SPA를 구성할 경우, 검색 엔진이 페이지를 제대로 인덱싱하지 못하는 문제가 발생할 수 있다.

#### Q2. 리액트 Context 나 Redux는 언제 사용하면 좋을까?

리액트 Context 나 Redux와 같은 상태 관리 라이브러리는 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 이러한 값을 공유하도록 할 수 있도록 한다.
따라서, React 컴포넌트 트리 안에서 **전역적(global)이라고 볼 수 있는 데이터를 공유할 때 사용한다.** 해당 데이터를 사용하는 컴포넌트에서만 끌어와서 쓸 수 있도록 하는 역할을 하기 때문이다. 그 데이터의 예시로는 현재 로그인한 유저, 테마, 선호하는 언어 등이 있다.

#### Q3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까?

- Local Storage(영구 저장소): key-value 쌍으로 데이터를 저장하는 웹 스토리지. 브라우저를 종료한 후 다시 들어와도 저장 기록이 남아있다.
- Session Storage(임시 저장소): local storage와 다르게 브라우저를 종료할 때 브라우저에 저장된 데이터가 삭제된다. 즉, `local storage`와 `session storage` 의 차이점은 **데이터가 어떤 범위 내에서 얼마나 오래 보존되는지**에 있다.
- Cookie: 페이지에서 쿠키를 설정하면 이후 모든 웹 요청은 쿠키정보를 포함하여 서버로 전송된다는 점이다. 쿠키를 통해서 서버와 클라이언트가 지속적으로 데이터 교환을 하게 된다. 쿠키와 웹스토리지의 가장 큰 차이점이기도 하다.
