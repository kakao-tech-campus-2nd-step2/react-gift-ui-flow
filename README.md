# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

---

### Step1 페이지 만들기

1. react-router-dom을 이용하여 router 구현하기
2. Layout: Header구현하기
3. Layout: Footer구현하기
4. Main페이지 구현하기
5. Theme페이지 구현하기
6. 로그인 페이지 구현하기
7. 마이 페이지 구현하기
8. 경로 상수화 하기

---

### Step2 인증 프로세스 구현

1. 로그인 페이지에서 ID, PW를 입력하면 sessionStorage에 authToken key에 저장
2. authToken을 토대로 로그인 여부 판단(contextAPI이용)
3. 로그인 여부에 따른 헤더 수정
4. my-account는 로그인 된 사람만 접근 가능하게 수정
5. my-accout에서 로그아웃 구현

---

### Step3

Q 질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?

SPA는 한개의 페이지로 이루어진 어플리케이션으로 렌더링의 역할을 서버가 아닌 브라우저로 처리하게 된다. 즉 `<index.html>`이라는 하나의 html에서 서로 다른 컴포넌트를 보여주는 방식이다.  
다른 url로 이동시 전체 페이지가 교체되지 않고 컴포넌트만 변화가 일어나기에 히스토리가 쌓이지 않는 등 불편함이 생긴다.  
이러한 단점을 React Router가 보완해줄 수 있는 것이다.

Q 질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)

테마(야간 모드 등)를 변경하기 위한 테마 상태를 Context로 관리하면 좋다. 테마를 변경하면 모든 컴포넌트에서 적용이 되어야하기에 props로 테마 상태를 관리하기 보다는 전역 상태로 관리하는 것이 더 좋다고 생각한다.

Q 질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?

- Local Storage: 데이터를 브라우저에 저장하고, 브라우저 종료한 후 다시 들어와도 저장 기록이 남아져 있다.  
  동일한 origin(동일 프로토콜, 도메인, 포트)를 공유하는 모든 탭/윈도에서 공유가 된다.
- Session Storage: 데이터를 브라우저에 저장하고, 브라우저를 종료할 때 삭제된다.  
  탭/윈도우 단위로 세션 스토리지가 생성되며, 서로 다른 세션 스토리지는 서로 영향을 주지 않고 독립적으로 동작
- Cookies: 서버와 클라이언트가 지속적으로 데이터 교환을 하기 위해 만들어졌다.  
  웹 사이트에서 쿠키를 설정하면 모든 웹 요청은 쿠키정보를 포함하여 서버로 전송

Cookies는 로그인 토큰 등을 넣어 사용자의 로그인 상태를 유지할 수 있다.  
Local Storage는 "오늘 하루 보지 않기" 탭과 같은 상태를 저장할 수 있다.
