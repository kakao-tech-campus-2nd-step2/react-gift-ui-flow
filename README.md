# React Gift UI Flow

## 개요

이 저장소는 FE 카카오 선물하기 2주차 과제 (2024-07-01 ~ 2024-07-05)를 위한 React 페이지 구현을 포함하고 있습니다. 학습 일지는 [여기](https://www.notion.so/TIL-FE-25dbeb894e884b889eca0fa3e4e13904)에서 확인할 수 있습니다.

지난주에 진행한 레퍼지토리도 있지만 ([react-gift-react-foundation](https://github.com/sugoring/react-gift-react-foundation)), 기반을 잡아놓은 프로젝트에서 실행하는 방법도 익혀보고 싶어 해당 레퍼지토리([react-gift-ui-flow](https://github.com/kakao-tech-campus-2nd-step2/react-gift-ui-flow))를 클론하여 시작하였습니다.

---

## 페이지 구현 - Routing, 로그인 (without API)

---

### 1단계 - 페이지 만들기 (without API)

- design 작업은 진행하지 않았습니다.
- 최대한 common 컴포넌트를 활용하고자 하였습니다.

#### 공통 컴포넌트 구현

- **Header 컴포넌트 생성**

  - [x] Header 컴포넌트 파일 생성
  - [x] Header 컴포넌트 기본 구조 작성
    - [ ] themeKey에 따라 label 변경 로직 추가
    - [ ] themeKey에 따라 title 변경 로직 추가
    - [ ] themeKey에 따라 description 변경 로직 추가
    - [ ] themeKey에 따라 backgroundColor 변경 로직 추가
  - [x] Header 컴포넌트를 모든 페이지에 적용

- **Footer 컴포넌트 생성**

  - [x] Footer 컴포넌트 파일 생성
  - [x] Footer 컴포넌트 기본 구조 작성
  - [x] Footer 컴포넌트를 모든 페이지에 적용

#### 페이지 구현

1. **MainPage (/)**

   - [x] MainPage 파일 생성
   - [x] Theme 카테고리 섹션 추가
     - [x] Theme 카테고리 섹션 기본 구조 작성
     - [x] Theme 카테고리 Item 클릭 시 Theme 페이지(/theme/:themeKey)로 이동 로직 추가
   - [x] 실시간 급상승 선물랭킹 추가
     - [x] 실시간 급상승 선물랭킹 기본 구조 작성
     - [x] 필터 기능을 hooks를 사용하여 구현
       - [x] 필터: 금액 낮은 순, 금액 높은 순
       - [ ] 필터: 전체, 여성이, 남성이, 청소년이
       - [ ] 필터: 받고 싶어한, 많이 선물한, 위시로 받은
   - [x] 상품 목록을 보여줌
     - [x] 처음에는 6개만 보여짐
     - [x] 더보기 버튼 기능 구현
     - [x] 접기 버튼 기능 구현

2. **ThemePage (/theme/:themeKey)**

   - [x] ThemePage 파일 생성
   - [x] Header 섹션의 themeKey에 따른 내용 변경 확인
   - [x] 상품 목록 섹션 추가
     - [x] 상품 목록 기본 구조 작성

3. **LoginPage (/login)**

   - [x] LoginPage 파일 생성
   - [x] ID와 PW 입력 폼 생성
   - [x] 로그인 버튼 생성
   - [x] 로그인 버튼 클릭 시 로그인 처리 로직 추가 (현재는 ID와 PW는 아무 값이나 입력해도 통과)

4. **MyAccountPage (/my-account)**
   - [x] MyAccountPage 파일 생성
   - [x] 로그아웃 버튼 추가
   - [x] 로그아웃 버튼 클릭 시 로그아웃 처리 로직 추가

---

### 2단계 - 인증 프로세스 구현

#### 1. 로그인 구현 (@/pages/LoginPage)
  - [x] 로그인 버튼 클릭 시 Fake 로그인
  - [x] 로그인 성공 시 직전 페이지로 Redirect
  - [x] ContextAPI를 활용해 `authToken` 관리
  - [x] ID를 sessionStorage의 `authToken` 키에 저장
  - [x] 모든 페이지 진입 시 sessionStorage에서 `authToken` 확인

#### 2. 헤더 구현 (@/components/Header/Nav)
  - [x] 로그인 상태: 내 계정 버튼 표시
  - [x] 비로그인 상태: 로그인 버튼 표시

#### 3. 계정 페이지 구현 (@/pages/MyAccountPage)
  - [x] 로그인한 상태: 접근 가능
  - [x] 비로그인 상태: 로그인 페이지로 리디렉션

  ##### **로그아웃 기능 구현**
  - [x] sessionStorage에서 `authToken` 제거
  - [x] 메인 페이지(/)로 리디렉션

---

### 3단계 - 질문의 답변을 README에 작성

### 3단계 - 질문의 답변을 README에 작성

#### 질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?
- React Router 없이 페이지 간 전환을 수동으로 처리해야 하므로 복잡하고 오류가 발생하기 쉽습니다. URL에 따라 페이지를 렌더링하는 기능이 없기 때문에, 사용자 경험이 저하되고 애플리케이션의 구조가 혼란스러워질 수 있습니다. 특히, SPA에서 라우팅은 사용자 인터페이스의 핵심 요소로, 이를 수동으로 구현하는 것은 유지 보수와 확장성 면에서 큰 어려움을 초래할 수 있습니다.

#### 질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)
- 회원등급에 따라 보여지는 페이지가 다를 때, 예를 들어 우수회원, 정회원 등의 등급별로 다른 콘텐츠를 제공해야 하는 경우에 사용할 수 있습니다. 이와 같은 상황에서는 전역 상태 관리가 필요하며, Context나 Redux를 사용하면 회원 등급 정보를 애플리케이션 전체에서 쉽게 접근하고 관리할 수 있습니다. 

#### 질문 3. Local Storage, Session Storage와 Cookies의 차이가 무엇이며 각각 어떨 때 사용하면 좋을까요?
- **Local Storage**: 만료 기간이 없으며, 사용자가 명시적으로 데이터를 삭제하지 않는 한 유지됩니다. 

- **Session Storage**: 브라우저 창이나 탭을 닫으면 데이터가 삭제됩니다. 따라서 일시적인 데이터 저장에 유용합니다. 예를 들어, 사용자 세션 동안만 필요한 데이터를 저장할 때 적합합니다. 쇼핑몰의 장바구니 데이터나 일시적인 폼 입력값을 저장하는 데 사용할 수 있습니다.

- **Cookies**: 만료 기간을 설정할 수 있으며, 설정된 기간 동안 유지됩니다. 또한 서버와의 통신 시에 자동으로 포함될 수 있는 데이터 저장에 유용합니다. 따라서 사용자 인증 토큰이나 트래킹 정보 등을 저장할 때 적합합니다. 