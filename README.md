# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

# STEP3
📝질문 1.  CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?
---
SPA는 하나의 페이지에서 모든 내용을 제공하는 웹 어플리케이션인데, 경로에 따라 다른 화면을 보여주기 위해 React Router를 사용한다. 그렇기에 React Router를 사용하지 않는다면 특정 페이지로 이동한든 것이 쉽지 않을 것이며 상태관리도 어렵고 페이지별로 컴포넌트를 분리하여 사용하는 것 또한 어려워질 것 이다.

📝질문 2.  리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)
---
 Context 나 Redux는 상태 관리 라이브러리 이다. 그렇기에
 ConText는 테마의 상태를 전역적으로 관리하는데 유용하게 쓰일 수 있을 것이다. 테마는 애플리케이션 전반적으로 영향을 미치고 여러 컴포넌트에서 접근할 필요가 있기 때문에  context를 사용한다면 쉽게 접근할 수 있을 것이다.
Redux는 전자상거래에 유용하게 쓰일 수 잇을 것이다.
대규모의 쇼핑몰을 운영하게 된다면 상태가 매우 복잡해질 것이고 여러 컴포넌트가 서로 다른 상태를 공유하고 업데이트 해야 하기에 Redux를 사용한다면 상태의 일관성을 유지하고 디버깅을 편하게 할 수 있을 것이다.

📝질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?
---
- Local Storage<br>Local Storage는 영구적인 저장소로 브라우저가 닫히고 다시 열려도 데이터가 유지된다. 영구적인 저장소이기에 사용자 개개인의 설정이나 아이디 비밀번호 기억 등의 기능에 사용면 좋을 것이다
- Session Storage<br>Session Storage는 브라우저 창이나 탭이 닫히면 데이터도 함께 삭제 되는 저장소이다.
유튜브의 검색창에 입력한 내용 등 일시적인 입력 데이터 등에 사용하면 좋을 것이다.
- Cookies<br>Cookies는 만료 날짜를 설정할 수 있는 저장소로 설정 기간 동안에만 유지되는 특성이 있다.
쿠키는 특정 기간만 이용할 수 있는 구독 서비스 등에 사용자 인증 정보를 부여하는 곳에 사용한다면 좋을 것이다.
