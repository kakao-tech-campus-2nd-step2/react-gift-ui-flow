- 질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?
  앞으로 가기, 뒤로 가기가 불가함. UX 저하됨 (네비게이션이 어려워지기 때문)

- 질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)
  Context: 전역적으로 필요한 설정일 경우 사용. (테마 등)
  Redux: 상태관리가 복잡한 경우. (계속해서 변화하는 데이터를 다룰 필요가 있는 경우 등)

- 질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?
  Local Storage: 장기간 필요한 데이터를 다룰 때 이용.
  Session Storage: Session이 종료되면 필요없는 데이터를 다룰 때 이용.
  Cookies: 인증에 유용. 서버와 클라이언트 간 데이터 전송에 이용하기 적합.
