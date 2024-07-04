# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 1. 1단계 - 프로젝트 세팅

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzgHvzRM)

## Week 1. 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/4wYFPW1K)

## Week 2. 1단계 - 페이지 만들기

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa/ls/QzV1ncxk)

### 기능 목록

- [ ] Header, Footer와 같은 공통 컴포넌트 만들기 (모든 페이지에서 Header와 Footer는 보여질 수 있게 적용)

- 각 Url Path별로 페이지 만들기 (결과물과 스타일은 결과 링크 참고)
  - [ ] 메인 페이지 (/)
    - [ ] Theme 카테고리 섹션 추가
      - [ ] heme 카테고리 Item 클릭 시 Theme 페이지(/theme/:themeKey)로 이동
    - [ ] 실시간 급상승 선물랭킹 추가
      - [ ] 필터 기능을 hooks를 사용하여 구현 (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
    - [ ] 상품 목록을 처음에는 6개만 보여지게 하기
    - [ ] 더보기를 누르는 경우 상품 목록을 더 보여주기 (접기 버튼을 누르면 다시 6개만 보여지도록)
  - [ ] Theme 페이지(/theme/:themeKey)
    - [ ] Header 섹션 추가
      - [ ] 재사용성을 고려하여 Header 섹션을 만들기 (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
    - [ ] 상품 목록 섹션 추가
  - [ ] 로그인 페이지(/login)
    - [ ] ID와 PW를 입력하면 로그인이 되도록 구현(ID와 PW는 아무 값을 입력해도 통과)
  - [ ] 나의 페이지(/my-account)
    - [ ] 로그아웃을 할 수있는 버튼을 추가
