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
- [ ] Fake 로그인 기능 구현
	- [X] 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 autoToken key에 저장
	- [X] 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직 추가(ContextAPI 활용)
	- [X] Header에서 로그인 한 경우 내 계정을, 로그인 하지 않은 경우 로그인 버튼 추가
	- [X] 내 계정(/my-account)페이지는 로그인 한 사람만 접근 가능
	- [ ] 내 계정 페이지에서 로그아웃 가능(로그아웃 후 메인 페이지(/)로 Redirect)