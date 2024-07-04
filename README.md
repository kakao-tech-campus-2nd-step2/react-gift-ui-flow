# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

## Week 2. 1단계 - 페이지 만들기

### 요구 사항

- Header, Footer와 같은 공통 컴포넌트를 만들어요.
- 메인 페이지 (/)
  - Theme 카테고리 섹션을 추가해요.
    - Theme 카테고리 Item을 클릭 시 Theme 페이지(/theme/:themeKey)로 이동해요.
  - 실시간 급상승 선물랭킹을 추가해요.
    - 필터 기능을 hooks를 사용하여 구현해요. (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
    - 상품 목록을 처음에는 6개만 보여지게 해요. 더보기를 누르는 경우 상품 목록을 더 보여줘요. (접기 버튼을 누르면 다시 6개만 보여지게 해요)
- Theme 페이지(/theme/:themeKey)
  - Header 섹션을 추가해요.
    - 재사용성을 고려하여 Header 섹션을 만들어요. (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
  - 상품 목록 섹션을 추가해요.
- 로그인 페이지(/login)
  - ID와 PW를 입력하면 로그인이 되도록 구현해요. (ID와 PW는 아무 값을 입력해도 통과되도록 해요.)
- 나의 페이지(/my-account)
  - 로그아웃을 할 수있는 버튼을 추가해요.

### 구현한 기능 목록

#### 공통 컴포넌트

- [x] BaseLayout
  - [x] Header
    - [x] 로그인 여부에 따라 버튼 변경(로그인/내 계정)
  - [x] Footer

#### 메인 페이지

- [x] Theme
  - [x] Theme Item 리스트
- Rank
  - [x] 필터링
  - [x] Ranking Goods Item 리스트
  - [x] 더보기 버튼

#### Theme 페이지

- [x] Header
- [x] Goods Item 리스트

#### 로그인 페이지

- [x] 로그인 form

#### 나의 페이지

- [x] 로그아웃 버튼

#### react router

- [x] 페이지에 라우터 연결
- [x] theme 페이지 다이나믹 라우터 처리

#### 리팩토링
