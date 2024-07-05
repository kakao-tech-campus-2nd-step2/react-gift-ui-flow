# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

FE 카카오 선물하기 2주차 과제: 페이지 구현

## 1단계 기능 목록

- [x] 각 페이지를 경로별로 라우팅

### 공통 컴포넌트 만들기

- [x] Header 컴포넌트 생성
- [x] logo 클릭 시, `/`으로
- [x] 로그인 여부에 따라 라우팅 (false면 **`/login`**, true면 **`/my-account`**)
- [x] Footer 컴포넌트 생성

### 메인 페이지 만들기 (**`/`**)

- [x] Friend 섹션 추가
- [x] Friend Img 클릭 시, alert
- [x] Theme 섹션 추가 (Grid로 상품이 6열 2행으로 보이게 구현)
- [x] Theme Item 클릭 시, Theme 페이지(**`/theme/:themeKey`**)로 라우팅
- [x] AI 섹션 추가
- [x] Ranking 섹션 추가
- [x] hooks 사용해 필터 기능 구현 (전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
- [x] 더보기를 누르는 경우, 상품 목록이 더 보여지게 구현 (접기 버튼을 누르면 다시 6개만)

### Theme 페이지(**`/theme/:themeKey`**)

- [x] Header 및 상품 목록 섹션 추가
- [x] themeKey에 따라 label, title, description, backgroundColor 변화

### 로그인 페이지(**`/login`**)

- [x] 로그인 페이지 기본 구현
- [x] ID와 PW를 입력하면 로그인이 되도록 구현 (ID와 PW는 아무 값을 입력해도 통과)

### 나의 페이지(**`/my-account`**)

- [x] 나의 페이지 기본 구현
- [x] 로그아웃 가능한 버튼 추가

## 2단계 기능 목록

- [x] 로그인 페이지에서 ID와 PW를 입력하면 직전 페이지로 Redirect

### Fake 로그인 기능 구현

- [x] 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 **`authToken`** key에 저장
- [x] 모든 페이지 진입 시, **`authToken`**을 토대로 로그인 여부를 판단하는 로직 추가(ContextAPI 활용)
- [x] Header에서 로그인 한 경우 내 계정 버튼, 로그인 하지 않은 경우 로그인 버튼 추가
- [x] 내 계정(**`/my-account`**) 페이지는 로그인 한 사람만 접근 가능. (로그인 하지 않은 유저는 로그인 페이지로 연결)
- [x] 내 계정 페이지에서 로그아웃 가능 (로그아웃 후 메인 페이지(**`/`**) 로 Redirect)
