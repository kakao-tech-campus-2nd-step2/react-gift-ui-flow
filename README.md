# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

## 1단계 - 페이지 만들기
### 요구사항
- [X] Header, Footer와 같은 공통 컴포넌트 만들기
	- [X] 모든 페이지에서 Header와 Footer가 보이게 적용
- [X] 각 URL Path 별로 페이지 만들기
	- 메인 페이지(/)
		- [X] Theme 카테고리 섹션 추가
			- [X] Theme 카테고리 Item 클릭 시 Theme 페이지(/theme/:themeKey)로 이동
		- [X] 실시간 급상승 선물 랭킹 추가
			- [X] 필터 기능을 hooks를 사용하여 구현(ex. 전체, 여성이, 남성이, 청소년이/받고 싶어한, 많이 선물한, 위시로 받은)
			- [X] 상품 목록을 처음에는 6개만 보이도록, 더보기를 누르는 경우 상품 목록을 더 보여줌(접기 버튼을 누르면 다시 6개만 보이도록)
	- Theme 페이지(/theme/:themeKey)
		- [X] Header 섹션 추가
			- [X] 재사용성 고려하여 만들기(themeKey에 따라 label, title, description, backgroundColor가 달라짐)
		- [X] 상품 목록 섹션 추가
	- 로그인 페이지(/login)
		- [X] ID와 PW를 입력하면 로그인이 되도록 구현(ID와 PW는 아무 값을 입력해도 통과)
	- 나의 페이지(/my-account)
		- [X] 로그아웃을 할 수 있는 버튼 추가

## 2단계 - 인증 프로세스 구현
### 요구사항
- [X] 로그인 페이지에서 ID와 PW를 입력하면 직전 페이지로 Redirect
- [X] Fake 로그인 기능 구현
	- [X] 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 autoToken key에 저장
	- [X] 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직 추가(ContextAPI 활용)
	- [X] Header에서 로그인 한 경우 내 계정을, 로그인 하지 않은 경우 로그인 버튼 추가
	- [X] 내 계정(/my-account)페이지는 로그인 한 사람만 접근 가능
	- [X] 내 계정 페이지에서 로그아웃 가능(로그아웃 후 메인 페이지(/)로 Redirect)

## 3단계 - 질문 답변
- 질문 1. CRA 기반의 SPA 프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?
	- 다른 페이지를 로드하거나 상태를 변경하는 기능을 직접 구현해야 합니다. React Router를 사용하면 경로와 컴포넌트를 쉽게 연결 가능해서 페이지 구성과 관리 면에서 편리한데, 이를 직접 구현하게 되면 컴포넌트 간의 전환을 일관성 있게 관리하기 어려워지고 코드의 복잡도가 증가합니다.
- 질문 2. 리액트 Context나 Redux는 언제 사용하면 좋을까요?(로그인을 제외한 예시와 이유를 함께 적어주세요.)
	- 다크 모드와 라이트 모드 같은 테마 관리에 사용하면 좋을 것 같습니다. 테마 설정은 애플리케이션의 여러 부분에서 필요한데, 이를 Context를 사용해 전역적으로 관리하면 테마 설정을 바꿀 때마다 prop drilling을 하지 않아도 됩니다.
- 질문 3. Local Storage, Session Storage와 Cookies의 차이가 무엇이며 각각 어떨 때 사용하면 좋을까요?
	- Local/Session Storage는 데이터가 클라이언트 측에만 저장되고 서버로는 자동으로 전송되지 않는 반면, Cookies는 HTTP 요청과 함께 서버로 자동 전송됩니다. 또, Local Storage는 명시적으로 삭제할 때까지 데이터가 유지되고 Session Storage는 브라우저 세션이 끝나면 데이터가 삭제되며, Cookies는 지정한 만료 시간이 지나면 자동으로 삭제됩니다. Local Storage는 영구적으로 저장이 필요한 큰 데이터 저장에, Session Storage는 브라우저 탭이 열려있는 동안에만 필요한 데이터 저장에, Cookies는 서버와의 데이터 통신이나 작은 크기의 데이터 저장에 사용하면 좋습니다.