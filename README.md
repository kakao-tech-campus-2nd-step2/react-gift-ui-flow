# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

## Week 2. 구현할 기능
- [x] 본인만의 기준으로 일관된 코드를 작성해주세요.
- [x] 기능 단위로 커밋을 해주세요.
- [x] Header 컴포넌트를 만드세요.
- [x] Footer 컴포넌트를 만드세요.
- [x] Header, Footer는 모든 페이지에 보여질 수 있도록 하세요.
- [x] 각 Url Path 별로 페이지를 만들어요.
- 메인페이지 (/)
- [x] Theme 카테고리 섹션을 추가해요.
- [x] Theme 카테고리 Item을 클릭 시, Theme 페이지 (/theme/:themeKey)로 이동해요.
- [x] 실시간 급상승 선물랭킹을 추가해요.
- [x] 필터 기능을 hooks를 사용하여 구현해요.
- [x] (전체, 여자, 남자, 청소년) 으로 나눠요.
- [x] (받고 싶어한, 많이 선물한, 위시로 받은) 으로 나눠요.
- [x] 상품 목록이 처음에는 6개만 보여지도록 해요.
- [x] 더보기를 구현해요.
- [x] 더보기를 누르면 상품 목록을 더 보여줘요.
- [x] 접기 버튼을 구현해요.
- [x] 접기 버튼을 누르면 다시 6개만 보여줘요.
- Theme 페이지 (/theme/:themeKey)
- [x] Header 섹션을 추가해요.
- [x] 재사용성을 고려하여 Header 섹션을 만들어요.
- [x] themeKey에 따라 label, title, description, backgroundColor가 달라져요.
- [x] 상품 목록 섹션을 추가해요.
- 로그인 페이지 (/login)
- [x] ID 와 PW 를 입력하면 로그인이 되도록 해요. (아무 값을 입력해도 로그인이 되요)
- 나의 페이지 (/my-account)
- [x] 로그아웃을 할 수 있는 버튼을 추가해요.
- [ ] 로그인 페이지에서 ID와 비밀번호를 입력하면 직전 페이지로 Redirect 되도록 해요.
- [x] Fake 로그인 기능을 구현해요.
- [x] 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 authToken key에 저장해요.
- [x] 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직을 추가해요. (ContextAPI 활용)
- [x] Header에서 로그인 한 경우 내 계정을 로그인 하지 않은 경우 로그인내 계정(/my-account) 페이지는 로그인 한 사람만 접근 가능하게 해요.
- [x] (로그인 하지 않은 유저는 로그인 페이지로 연결해요) 버튼을 추가해요.
- [x] 내 계정 페이지에서 로그아웃을 할 수 있도록 해요. (로그아웃 후 메인 페이지(/) 로 Redirect 되도록 해요)
