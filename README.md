# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

## FE 카카오 선물하기 2주차 과제: 페이지 만들기

### 1단계

1. README에 구현할 기능 목록을 정리
2. header, footer 구현
3. 라우터 설정 및 기본 레이아웃 구현
4. MainPage 구현 (SelectFriend, ThemeCategory, AIGift, GiftRanking)
5. ThemePage 구현(HeaderSection, GoodsList)
6. LoginPage 구현(ID/PW 로그인 버튼)
7. MyAccountPage 구현 (로그아웃 버튼)

### 2단계

8. id와 pw를 sessionStorage에 저장
9. 모든 페이지에서 로그인 여부 판단 (ContextAPI)
10. Header [내 계정, 로그인] 수정
11. 내 계정은 로그인 했을 경우에만 접근 가능하도록 구현
12. 로그아웃 시 `/`로 redirect

## 3단계 질문
### 질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?

  - SPA는 하나의 html 파일을 사용하여 필요한 데이터만 비동기적으로 요청하고 동적으로 컨텐츠를 바꿉니다.<br>
    결국 SPA는 페이지 이동 없이 URL을 변경하고 해당 URL에 맞는 컨텐츠를 동적으로 렌더링해야 합니다.<br>
    React 자체에는 라우팅 기능이 없어서 React Router 라는 라이브러리를 사용하는데,<br>
    React Router는 내부적으로 브라우저의 History API를 사용하여 URL을 변경하고 해당하는 컴포넌트를 렌더링하는 기능을 제공합니다.<br>
    즉, 클라이언트 사이드에서 이루어지는 라우팅을 간단하게 구현하도록 도와줍니다.<br>
    만약 React Router를 사용하지 않는다면, 직접 주소마다 다른 뷰를 보여줘야 하며 네비게이션 기능(뒤로가기 등)을 사용하지 못합니다.
---
### 질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)

  - **Context** - props-drilling을 피할 때, 단순히 전역 상태만을 관리할 때: <br>
    Context API는 전역적으로 상태를 공유해줄 뿐, 상태관리는 직접 해야합니다.<br>
    (ex 테마 관리 (다크 모드/라이트 모드), 설정 관리(언어, 알림 설정) 등)<br>
  - **Redux** - 여러 곳에서 많은 상태를 관리할 때, 상태 관리 외에 여러 기능이 필요할 때:<br>
    Redux는 상태를 관리해줍니다. 또한 `redux-saga`, `redux-thunk`, `redux-devtools` 등의 추가 라이브러리를 통해 더 많은 기능을 사용할 수 있고 리렌더링 관련 이슈도 최적화해줍니다.<br>
    (ex 장바구니, 사용자 정보, 제품 목록, 주문 상태 등 다양한 상태를 관리하는 경우, API를 통해 가져온 데이터를 캐싱하고 여러 컴포넌트에서 사용할 경우 등)
---
### 질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?<br>

  #### 차이점

  - **데이터 전송**<br>
    Cookies: HTTP 요청과 함께 서버로 자동으로 전송<br>
    Storage: 클라이언트 측에만 저장됨<br>
  - **데이터 용량**<br>
    Cookies: 도메인당 약 4KB의 데이터를 저장<br>
    Storage: 도메인당 약 5MB의 데이터를 저장<br>
  - **만료 시간**<br>
    Cookies: 만료 시간을 지정할 수 있으며, 지정된 시간이 지나면 자동으로 삭제<br>
    Local Storage: 명시적으로 삭제할 때까지 데이터를 유지<br>
    Session Storage: 브라우저 세션이 끝나면 데이터를 삭제<br>
  - **보안**<br>
    Cookies: Secure 및 HttpOnly 플래그를 사용하여 보안을 강화<br>
    Storage: 보안 설정 없음<br>

  #### 사용 사례
  - Local Storage - 영구적으로 저장해야 하는 데이터를 클라이언트에서 저장할 때 사용<br>
  - Session Storage - 세션 동안만 유효한 데이터를 저장할 때 사용<br>
  - Cookies - 서버와 클라이언트 간에 데이터를 교환해야 하거나 만료 기간을 설정해야할 때 사용
