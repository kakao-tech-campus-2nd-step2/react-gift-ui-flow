# 2️⃣ 2주차 Routing, 로그인(without API)
## 📄 1단계 - 페이지 만들기
### ✅ 기능 목록
- [x] Header 공통 컴포넌트 구현
- [x] Footer 공통 컴포넌트 구현
- [x] Inner 공통 컴포넌트 구현
- [x] 친구 선택 유도 섹션 구현
- [] 각 Url Path별로 페이지 구현
  - 메인페이지(`/`)
    - [x] Theme 카테고리 섹션 추가
      - [x] Theme 카테고리 Item 클릭 시 Theme페이지 (`/theme/:themeKey`)로 이동되도록 구현
    - [x] 실시간 급상승 선물 랭킹 추가
      - [x] Target 컴포넌트 구현
      - [x] Wish 컴포넌트 구현
      - [x] 필터 기능을 hooks로 구현 (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
      - [x] 상품 목록을 처음에는 6개만 렌더링, 더보기를 누르는 경우 상품 목록을 더 보여주도록 구현 (접기 버튼을 누르면 다시 6개만 보여지도록 구현)
  - Theme 페이지(`/theme:themeKey`)
    - [x] Header 섹션 추가
    - [x] 재사용성을 고려한 Header 섹션 구현(themeKey에 따라 label, title, description, backgroundColor 변경되도록 구현)
    - [x] 상품 목록 섹션 추가
  - 로그인 페이지(`/login`)
    - [x] ID, PW 입력시 로그인이 되도록 구현(아무값을 입력해도 통과)
  - 나의 페이지(`/my-account`)
    - [x] 로그아웃 할 수 있는 버튼 추가

## 📄 2단계 - 인증 프로세스 구현
### ✅ 기능 목록
- [x] 로그인에서 ID, PW를 입력하면 직전페이지로 Redirect
- [] Fake 로그인 기능 구현
  - [x] ID, PW 입력시 ID를 sessionStorage의 `authToken` key에 저장
  - [x] 모든 페이지 진입 시 authToken 여부에 따라 로그인 여부 판단 로직 추가(ContextAPI 활용)
  - [x] 로그인할 경우 Header에서의 로그인 버튼을 '내 계정'으로 변경, 그렇지 않을 경우 '로그인'으로 변경
  - [x] 로그아웃 기능 구현(메인페이지(`/`)로 Redirect
  - [] 마이페이지에 사용자이름 출력하도록 구현