# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

[🔗 link](https://edu.nextstep.camp/s/hazAC9xa)

## Week 2. 1단계 - 페이지 만들기

- 공동 컴포넌트 구현<br/>
  - [ ] Header 구현<br/>
  - [ ] Footer 구현<br/>
  <br/>
- Url Path별 페이지 구현<br/>
  - 메인 페이지 (`/`)<br/>
    - [ ] Theme 카테고리 섹션 추가<br/>
      - [ ] Theme 카테고리 Item을 클릭 시 Theme 페이지(`/theme/:themeKey`)로 이동<br/>
    - [ ] 실시간 급상승 선물랭킹 추가<br/>
      - [ ] 필터 기능을 hooks를 사용하여 구현 (ex. 전체, 여성이, 남성이, 청소년이 받고 싶어한, 많이 선물한, 위시로 받은)<br/>
      - [ ] 상품 목록을 처음에는 6개만 보여지게 하기. 더보기를 누르는 경우 상품 목록을 더 보여줌 (접기 버튼을 누르면 다시 6개만 보여지게 함)<br/>
  - Theme 페이지 (`/theme/:themeKey`)<br/>
    - [ ] Header 섹션을 추가<br/>
      - [ ] 재사용성을 고려하여 Header 섹션 만들기 (themeKey에 따라 label, title, description, backgroundColor가 달라짐)<br/>
    - [ ] 상품 목록 섹션 추가<br/>
  - 로그인 페이지 (`/login`)<br/>
    - [ ] ID와 PW를 입력하면 로그인이 되도록 구현 (ID와 PW는 아무 값을 입력해도 통과되도록)<br/>
  - 나의 페이지 (`/my-account`)<br/>
    - [ ] 로그아웃 버튼 추가
