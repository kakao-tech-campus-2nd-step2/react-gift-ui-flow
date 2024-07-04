# 🎁카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week2. STEP1 - 페이지 구현

### ✨How to start

#### `npm run start`

프로젝트 실행

#### `npm run storybook`

스토리북 실행

### 📜Requirements

- [x] Header, Footer 공통 컴포넌트 구현
  - 모든 페이지에서 Header와 Footer는 보여질 수 있도록 함.
- [x] 각 Url Path별로 페이지 생성
  - 메인 페이지( `/` )
  - [x] Theme 카테고리 섹션 추가
  - [x] Theme 카테고리 Item 클릭 시 Theme 페이지 ( `/theme/:themeKey` )로 이동
- [x] 실시간 급상승 선물랭킹 구현
  - [x] hooks를 사용하여 필터 기능 구현 (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
  - [x] 상품 목록을 처음에는 6개만 보여지게 함.
  - [x] 더보기를 누르는 경우 상품 목록을 더 보여주도록 함. (접기 버튼을 누르면 다시 6개만 보여지게 됨.)
- [x] Theme 페이지 ( `/theme/:themeKey` )
  - [x] 재사용성을 고려하여 Header 섹션 구현 (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
  - [x] 상품 목록 섹션 구현
- [x] 로그인 페이지( `/login` )
  - [x] ID와 PW를 입력하면 로그인이 되도록 구현(ID와 PW는 아무 값을 입력해도 통과되도록 함.)
- [x] 나의 페이지(`/my-account`) 구현
  - [x] 로그아웃 버튼 구현
  - [x] 로그아웃 기능 구현
