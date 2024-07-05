# 카카오 테크 캠퍼스 Step2 과제(2주차)
###  사용한 기술 스택
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
</br>

### 프로젝트 설명
**[카카오 선물하기 사이트](https://gift.kakao.com/home)** 를 만들려한다.

이번 주차에는 React-Router-Dom을 사용해 각 Path별 페이지를 구현하고 Fake 로그인 기능까지 구현하는 것이 목표이다.


### 프로젝트 요구사항
- [X] Header와 Footer 공통 컴포넌트 만들기 (모든 페이지에서 보여야 함)
  - [X] 로그인 여부에 따라 프로필 / 로그인 띄우기
- [X] 메인 페이지( / )  
  - [ ] Theme 카테고리 섹션 추가
  - [ ] Trending 섹션 추가
- [ ] Theme 페이지 ( /theme )
  - [X] Header 섹션 추가
  - [ ] themeKey에 따라 label, title, description, backgroundColor가 달라지는 Header 섹션 만들기
- [X] 로그인 페이지 ( /login )
  - [X] 로그인 하면 직전 페이지로 리다이렉트
  - [X] authToken ke에 저장
- [ ] 마이 페이지 ( my- account)  
  - [X] 로그아웃 버튼 추가
  - [ ] 로그인 한 사람만 접근 가능하게 구현
  - [X] 로그아웃 이후 메인 페이지로 리다이렉트
- [ ] 모든 페이지 진입 시 autoToken을 토대로 로그인 여부 판단하는 로직 추가(ContextAPI 활용)

### 2주차 질문
### Q1 : CRA기반의 SPA 프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?
 A:  가장 큰 걸림돌은 페이지를 이동하는 동안 Blink 현상이 생겨 User Experience가 떨어지는 문제가 발생하는 것이다. 결국 SPA를 사용하는 중요한 이유 중 하나는 화면 깜빡임 없이 smooth한 유저 경험을 위함일텐데, 리액트 라우터를 사용하지 않는다면 사용할 이유가 없게 되는 것이다.
### Q2 : 리액트 Context나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)
  A: 로그인이 가장 좋은 예시겠지만, 다크모드나 라이트모드 적용을 할 때 활용하면 좋을 것 같다. 밤에 다크모드로 인터넧 하다가 갑자기 흰색 배경이 나오면 눈에 섬광탄을 맞은 것 같은 **눈뽕**이 오는데... 전역 상태관리를 통해 모든 페이지에서 동일한 Theme을 적용할 수 있다면 더할 나위 없이 편할 것이다..
### Q3 : Local Storage, Session Storage, 그리고 Cookies의 차이가 무엇이며 각각 어떨 때 사용하면 좋을까요? 
A: 쿠키는 만료 기간이 있는 키 값 저장소인데, 개발자 도구 열고 콘솔에 document.cookie 치면 현재 쿠키 정보가 나온다. 쿠키는 4kb 용량 제한이 있는데, 4kb는 내가 지금 쓰는 VS코드 아이콘 보다도 작은 용량이다. 이 작은걸 왜 쓰는고 하니 바로 HTTP 통신 과정에서 라벨과 같은 역할을 하는 친구라고 한다. 쿠키에 요청자의 정보를 담아서 쏘게 되는 것인데, 아무리 용량이 작다고 해도 계속 4kb씩 보내는 것은 비효율적일 것이다. 때문에 우리는 저러한 낭비를 막기 위해 브라우저 스토리지에 저장하게 된다. 
스토리지는 저장소를 서버로 보내지 않는다.

그렇다면 세션 스토리지와 로컬 스토리지의 차이는 뭘끼?

정답은 바로 데이터를 영구적으로 저장하느냐의 차이이다. 세션 스토리지는 말 그대로 세션이 종료되면 사라진다. 탭이나 윈도우를 닫게 되면 세션을 종료한 것이기에 스토리지도 함께 날아가게 된다. 그러나, 로컬 스토리지는 사용자가 지우지 않는 이상 계속 브라우저에 남는다. 때문에, 학교 복사집이나 공용 PC를 쓸 때는 로컬 스토리지까지 날리고 종료하는 것이 필요할 것이다.