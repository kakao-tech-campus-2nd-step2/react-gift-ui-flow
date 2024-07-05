# Step1 Requirements
- [x] Header, Footer와 같은 공통 컴포넌트를 만들어요. (모든 페이지에서 Header와 Footer는 보여질 수 있게 적용해요.)
- [x] 각 Url Path별로 페이지를 만들어요. (결과물과 스타일은 결과 링크 참고)
- [x] 메인 페이지 (/)
- [x] Theme 카테고리 섹션을 추가해요.
- [x] Theme 카테고리 Item을 클릭 시 Theme 페이지(/theme/:themeKey)로 이동해요.
- [x] 실시간 급상승 선물랭킹을 추가해요.
- [x] 필터 기능을 hooks를 사용하여 구현해요. (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
- [x] 상품 목록을 처음에는 6개만 보여지게 해요. 더보기를 누르는 경우 상품 목록을 더 보여줘요. (접기 버튼을 누르면 다시 6개만 보여지게 해요)
- [x] Theme 페이지(/theme/:themeKey)
- [x] Header 섹션을 추가해요.
- [x] 재사용성을 고려하여 Header 섹션을 만들어요. (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
- [x] 상품 목록 섹션을 추가해요.
- [x] 로그인 페이지(/login)
- [x] ID와 PW를 입력하면 로그인이 되도록 구현해요. (ID와 PW는 아무 값을 입력해도 통과되도록 해요.)
- [x] 나의 페이지(/my-account)
- [x] 로그아웃을 할 수있는 버튼을 추가해요.

# Step2 Requirements
- [x] 로그인 페이지에서 ID와 PW를 입력하면 직전 페이지로 Redirect 되도록 해요.
- [x] Fake 로그인 기능을 구현해요.
- [x] 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 authToken key에 저장해요.
- [x] 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직을 추가해요. (ContextAPI 활용)
- [x] Header에서 로그인 한 경우 내 계정을 로그인 하지 않은 경우 로그인 버튼을 추가해요.
- [x] 내 계정(/my-account) 페이지는 로그인 한 사람만 접근 가능하게 해요. (로그인 하지 않은 유저는 로그인 페이지로 연결해요)
- [x] 내 계정 페이지에서 로그아웃을 할 수 있도록 해요. (로그아웃 후 메인 페이지(/) 로 Redirect 되도록 해요)

# Step3 Requirements
___질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?___

1. 사용자 편의성이 없어집니다. URL이 하나라면, 페이지 내비게이션과 URL 공유와 같은 기능을 사용할 수 없습니다.
2. React Router를 통해 서버 요청 없이 URl을 바꿀 수 있는데, 서버 요청을 통해 view를 바꾼다면, URL이 바뀔 때마다 html 문서가 바뀌어 상태를 잃게 됩니다. (새로고침)

___질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)___

1. Props Drilling 하기 싫을 때,
2. UI에 light/black 모드 적용할 때, Context의 value가 바뀔 때마다 의존하는 컴포넌트들 모두 리렌더링 되기 때문에 구조 상관없이 리렌더링 시키기 좋습니다. 실제로 hook을 써서 해봤는데 잘 안됐습니다. 

___질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?___

1. Local Storage : 데이터는 영구적으로 저장됩니다.
2. Session Storage : 브라우저 또는 탭이 닫힐 때 데이터가 날아갑니다.
3. Cookies : 데이터 만료 기간을 설정할 수 있습니다.
