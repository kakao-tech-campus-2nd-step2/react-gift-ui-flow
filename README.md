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
- [x] Fake 로그인 기능을 구현해요.
	- [x] 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 authToken key에 저장해요.
	- [x] 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직을 추가해요. (ContextAPI 활용)
	- [x] Header에서 로그인 한 경우 내 계정을 로그인 하지 않은 경우 로그인 버튼을 추가해요.
	- [x] 내 계정(/my-account) 페이지는 로그인 한 사람만 접근 가능하게 해요. (로그인 하지 않은 유저는 로그인 페이지로 연결해요)
	- [x] 내 계정 페이지에서 로그아웃을 할 수 있도록 해요. (로그아웃 후 메인 페이지(/) 로 Redirect 되도록 해요)



---


## 질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?

- SPA는 하나의 페이지로 구성하기 때문에 원하는 페이지를 즐겨찾기에 등록할 수 없고, 이전화면으로 되돌아가기 힘들며, 검색엔진이 페이지 단위로 인덱싱할 수 없다.
- Router를 사용하면 SPA의 각 페이지를 고유한 URL로 접근 가능하게 하고, 브라우저의 히스토리 API를 통해 네비게이션을 원활하게 하며, 검색 엔진이 각 페이지를 인덱싱할 수 있도록 돕는다.


## 질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)

### Redux와 Context API의 차이

- Context API는 상태 관리 도구가 아니다. 상태 관리 자체는 직접 관리해야 한다. Context API는 그저 전역적으로 상태를 공유해주는 기능만 수행한다.
    - 실질적인 상태 관리는 useState와 useReducer로 동작하게 된다.
- 그에 반에 Redux는 상태를 관리해준다.

### Context를 사용해야 할 때

- props drilling을 피하고자 할 때
    - props drilling : 컴포넌트 트리에서 데이터를 하위 컴포넌트로 전달하기 위해 중간 컴포넌트를 통해 프로퍼티를 내려주는 것을 의미
- 구조적 복잡성이 낮고 상태 변경이 빈번하지 않은 경우
	- ex) 사용자 인증 상태 관리

### Redux를 사용해야 할 때

- 여러 위치에 많은 양의 상태 값이 존재 할 때
- 업데이트 로직이 복잡할 때
    - ex) 소셜 미디어 애플리케이션에서 게시물, 댓글, 좋아요 등의 상태를 관리하고 업데이트 해야할 때
- 많은 개발자들이 동시에 작업하는 대규모 프로젝트에서 상태 관리가 일관되게 유지되어야 할 때
- 상태 변경 과정을 추적하고 시각화하여 디버깅 및 분석을 용이하게 해야할 때
    - ex) 개임 개발에서 상태 변경 (게임 상태, 플레이어 상태 등)을 추적하고 시각화할 때
- 복잡한 비동기 로직, 메모리제이션, 데이터 직렬화 등 더 강력한 기능이 필요할 때


### 이유
- 여러 컴포넌트에서 공통으로 사용하는 상태를 쉽게 공유하고 접근할 수 있다.
- 상태를 중앙에서 관리하기 때문에 상태의 일관성을 유지하기 쉽다.


## 질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?

||Local Storage |	Session Storage	| Cookie
|---|---|---|---|
만료 시기 | 브라우저에서 수동으로 삭제하지 않는 한 평생 저장 | 브라우저에서 탭을 닫으면 만료 | 설정된 만료일에 따라 세션 쿠키 또는 영구 쿠키로 데이터 저장
저장 범위| Origin에 따라 관리 | 세션 범위 내에서만 데이터 유지 | 도메인과 경로에 따라 관리
저장 용량 | 최대 5MB | 최대 5MB | 최대 4kb
저장 장소 | 브라우저 | 브라우저 | 브라우저, 서버
사용 목적 | 영구적인 데이터 저장 및 유지에 사용 | 임시 데이터 또는 세션 기간 동안 데이터를 유지해야 할 때 | 사용	사용자 인증, 세션 관리, 개인화된 경험을 위해 사용
사용 예시 | 자동 로그인 | 일회성 로그인, 입력 폼 저장 | 로그인 자동완성
자동 서버 전송 | X | X | O

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