# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

# Gift Shop Project

## 구현할 기능 목록

### 1. 공통 컴포넌트

- [o] Header, Footer 구현

### 2. 메인 페이지 (`/`)

- [o] Theme 카테고리 섹션 구현 - 각 카테고리 아이템을 클릭하면 해당 테마 페이지로 이동
- [o] 실시간 급상승 선물 랭킹 섹션 구현 - 현재 인기 있는 선물 랭킹을 표시
- [o] 필터 기능 - 사용자가 특정 조건에 따라 선물 필터링
- [o] 상품 목록
  - 초기에는 6개의 상품만 표시됩니다.
  - "더보기" 버튼을 클릭하면 더 많은 상품이 표시
  - "접기" 버튼을 클릭하면 다시 6개의 상품만 표시

### 3. 테마 페이지 (`/theme/:themeKey`)

- [o] Header 섹션
  - themeKey에 따라 label, title, description, backgroundColor가 달라지는 재사용 가능한 Header 컴포넌트를 구현
- [o] 상품 목록 섹션

### 4. 로그인 페이지 (`/login`)

- [] 로그인 폼 - 사용자가 ID와 PW를 입력할 수 있는 입력 필드

### 5. 나의 페이지 (`/my-account`)

- [] 로그아웃 버튼
  - 로그아웃 시, 메인 페이지로 리다이렉트합니다.
