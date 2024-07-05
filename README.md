# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

#### 기능 요구 사항
- [x] Header, Footer, 공통 컴포넌트 만들어 모든 페이지에 적용
- 각 Url Path별로 페이지를 만들기

  <메인 페이지>
  - [x] Theme 카테고리 섹션 추가
    - [x] Theme 카테고리 Item을 클릭 시 Theme 페이지로 이동
  - [x] 실시간 급상승 선물랭킹 추가
    - [x] 필터 기능을 하는 hooks 추가
    - [x] 상품 목록 6개를 기본값으로 설정
    - [x] 상품 목록 더보기/닫기 버튼 추가

  <Theme 페이지>
  - [x] 재사용성을 고려한 Header 섹션 추가
  - [x] 상품 목록 섹션 추가

  <로그인 페이지>
  - [x] ID와 PW를 입력하면 로그인이 되도록 구현

  <나의 페이지>
  - [x] 로그아웃 버튼 추가

## Week 2. 2단계 - 인증 프로세스 구현
- [ ] Login 페이지에서 ID와 PW를 입력 시, 직전 페이지로 Redirect 되도록 구현
- Fake 로그인 기능 구현
  - [x] Login 페이지에서 ID와 PW를 입력 시, ID를 sessionStorage의 authToken key에 저장
  - [x] 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직 추가
  - [x] Header에서 로그인 시, 내 계정을 로그인 하지 않은 경우 로그인 버튼 추가
  - [ ] 내 계정(/my-account) 페이지는 로그인 한 사람만 접근 가능하게 구현
  - [ ] 내 계정 페이지에서 로그아웃을 할 수 있도록 구현