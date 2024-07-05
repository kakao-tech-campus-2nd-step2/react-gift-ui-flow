# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

---

# 구현 목록

## 1단계

- [x] react router dom 세팅

- 공통 컴포넌트 만들기
	- [x] Header
	- [x] Footer

- 페이지 만들기
	- 메인 페이지 (/)
		- [x] Theme 카테고리 섹션 추가
			- [x] Theme 페이지 이동
		- [x] 실시간 급상승 선물랭킹
			- [x] 필터 기능을 hooks를 사용하여 구현 (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
			- [x] 상품 목록 접기
			- [x] 상품 목록 펼치기
	- Theme 페이지(/theme :themeKey)
		- [x] Header 섹션 추가
			- [x] 재사용성을 고려하여 Header 섹션 만들기 (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
		- [x] 상품 목록 섹션을 추가.
	- 로그인 페이지(/login)
		- [x] 로그인 기능 추가 (ID와 PW는 아무 값을 입력해도 통과되도록)
	- 나의 페이지(/my-account)
		- [x] 로그아웃 버튼 추가
		- [x] 로그아웃 기능 추가


## 2단계

- [ ] 로그인 페이지에서 ID와 PW를 입력하면 직전 페이지로 Redirect 되도록 해요.
- [ ] Fake 로그인 기능을 구현해요.
	- [ ] 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 authToken key에 저장해요.
	- [ ] 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직을 추가해요. (ContextAPI 활용)
	- [ ] Header에서 로그인 한 경우 내 계정을 로그인 하지 않은 경우 로그인 버튼을 추가해요.
	- [ ] 내 계정(/my-account) 페이지는 로그인 한 사람만 접근 가능하게 해요. (로그인 하지 않은 유저는 로그인 페이지로 연결해요)
	- [ ] 내 계정 페이지에서 로그아웃을 할 수 있도록 해요. (로그아웃 후 메인 페이지(/) 로 Redirect 되도록 해요)



---



# 폴더 구조

```text
src
├── components
│   ├── common
│   │   ├── Button
│   │   │   ├── index.stories.tsx
│   │   │   ├── index.tsx
│   │   ├── FilterButton
│   │   │   ├── FilterButton.tsx
│   │   ├── Form
│   │   │   ├── Input
│   │   │   │   ├── UnderlineTextField.stories.tsx
│   │   │   │   ├── UnderlineTextField.tsx
│   │   ├── GoodsItem
│   │   │   ├── Default.stories.tsx
│   │   │   ├── Default.tsx
│   │   │   ├── Ranking.stories.tsx
│   │   │   ├── Ranking.tsx
│   │   ├── Image
│   │   │   ├── index.stories.tsx
│   │   │   ├── index.tsx
│   │   ├── layouts
│   │   │   ├── Container
│   │   │   │   ├── index.stories.tsx
│   │   │   │   ├── index.tsx
│   │   │   ├── Grid
│   │   │   │   ├── index.stories.tsx
│   │   │   │   ├── index.tsx
│   ├── Footer
│   │   ├── Footer.tsx
│   ├── GoodsCategory
│   │   ├── GoodsCategory.tsx
│   ├── Header
│   │   ├── Header.tsx
│   ├── Items
│   │   ├── Items.tsx
│   ├── Ranking
│   │   ├── Detail
│   │   │   ├── DetailButton.tsx
│   │   ├── Filter
│   │   │   ├── Filter.tsx
│   │   │   ├── FilterTab.tsx
│   │   │   ├── FilterTabs.tsx
│   │   ├── RankingItems
│   │   │   ├── RankingItems.tsx
│   │   │   ├── RankingHeader.tsx
│   ├── SelectFriend
│   │   ├── SelectFriend.tsx
│   ├── ThemeGoods
│   │   ├── ThemeGoods.tsx
│   ├── ThemeHeader
│   │   ├── ThemeHeader.tsx
├── pages
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── MyAccount.tsx
├── routes
│   ├── index.tsx

```