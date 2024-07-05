# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

### 기능 목록

- [x] Header, Footer와 같은 공통 컴포넌트 만들기 (모든 페이지에서 Header와 Footer는 보여질 수 있게 적용)

- 각 Url Path별로 페이지 만들기 (결과물과 스타일은 결과 링크 참고)
  - [x] 메인 페이지 (/)
    - [x] Theme 카테고리 섹션 추가
      - [x] heme 카테고리 Item 클릭 시 Theme 페이지(/theme/:themeKey)로 이동
    - [x] 실시간 급상승 선물랭킹 추가
      - [x] 필터 기능을 hooks를 사용하여 구현 (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
    - [x] 상품 목록을 처음에는 6개만 보여지게 하기
    - [x] 더보기를 누르는 경우 상품 목록을 더 보여주기 (접기 버튼을 누르면 다시 6개만 보여지도록)
  - [x] Theme 페이지(/theme/:themeKey)
    - [x] Header 섹션 추가
      - [x] 재사용성을 고려하여 Header 섹션을 만들기 (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
    - [x] 상품 목록 섹션 추가
  - [x] 로그인 페이지(/login)
    - [x] ID와 PW를 입력하면 로그인이 되도록 구현(ID와 PW는 아무 값을 입력해도 통과)
  - [x] 나의 페이지(/my-account)
    - [x] 로그아웃을 할 수있는 버튼을 추가

## 2주차 STEP3 질문

- 질문 1. CRA 기반의 SPA 프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?
  - SPA 프로젝트는 한 번에 모든 페이지를 로드 하고 필요한 부분만 렌더링하는데, React Router는 이러한 SPA 프로젝트에서 효율적인 라우팅을 돕는다.
  - 브라우저 히스토리 관리가 제대로 되지 않을 수 있다고 한다. 나도 리다이렉션 방법을 계속 찾다가 결국 마지막 커밋에서 `History.back()`을 사용했는데, SPA 프로젝트 특성상 예상치 못한 동작이 일어날 수 있을 것 같다.
- 질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)
  - 쇼핑몰 장바구니 기능에서 Context나 Redux를 사용하면 좋을 것이다. 대부분 쇼핑몰의 페이지 전체에서 장바구니에 담은 품목의 개수가 늘어나는 것을 확인할 수 있기 때문이다.
- 질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?
  - <b>Local Storage</b>
    - 개념 : 브라우저에 데이터를 <b>영구적</b>으로 저장 가능
    - 활용 : 사용자 설정, 애플리케이션 상태 저장
  - <b>Session Storage</b>
    - 개념 : 브라우저에 데이터를 <b>일시적</b>으로 저장. 웹페이지의 세션이 끝날 때 저장된 데이터가 지워짐
    - 활용 : 사용자 활동 추적, 폼 데이터 임시 저장
  - <b>Cookie</b>
    - 개념 : 웹 서버가 사용자의 웹 브라우저에 저장하는 작은 데이터 조각. HTTP 요청과 함께 <b>서버에 자동으로 전송</b>됨 => 서버와 클라이언트 간의 상태를 유지하는 데 유용. 로컬 및 세션 스토리지와 달리 보안 강화 가능
    - 활용 : 세션 식별자, 사용자 설정 등을 저장
