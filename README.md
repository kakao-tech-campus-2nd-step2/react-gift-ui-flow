# React Gift UI Flow

## 📝 Requirements

### STEP 1
- [x] 본인만의 기준으로 일관된 코드를 작성해주세요.
- [x] 기능 단위로 나누어 커밋을 해주세요.
- [x] Header, Footer와 같은 공통 컴포넌트를 만들어요. (모든 페이지에서 Header와 - [x] Footer는 보여질 수 있게 적용해요.)
- [x] 각 Url Path별로 페이지를 만들어요. (결과물과 스타일은 결과 링크 참고)
#### 메인 페이지 (/)
- [x] Theme -카테고리 섹션을 추가해요.
- [x] Theme 카테고리 Item을 클릭 시 Theme 페이지(/theme/:themeKey)로 이동해요.
- [x] 실시간 급상승 선물랭킹을 추가해요.
- [x] 필터 기능을 hooks를 사용하여 구현해요. (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
- [x] 상품 목록을 처음에는 6개만 보여지게 해요. 더보기를 누르는 경우 상품 목록을 더 보여줘요. (접기 버튼을 누르면 다시 6개만 보여지게 해요)
- Theme 페이지(/theme/:themeKey)
- [x] Header 섹션을 추가해요.
- [x] 재사용성을 고려하여 Header 섹션을 만들어요. (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
- [x] 상품 목록 섹션을 추가해요.
- 로그인 페이지(/login)
- [x] ID와 PW를 입력하면 로그인이 되도록 구현해요. (ID와 PW는 아무 값을 입력해도 통과되도록 해요.)
- [x] 나의 페이지(/my-account)
- [x] 로그아웃을 할 수있는 버튼을 추가해요.