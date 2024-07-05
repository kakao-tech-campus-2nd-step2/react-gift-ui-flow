# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

## 2주차 Step1 구현 기능 정리
1. Header, Footer와 같은 공통 컴포넌트를 만들어요. (모든 페이지에서 Header와 Footer는 보여질 수 있게 적용)

2. 각 Url Path별로 페이지 만들기

3. 메인 페이지 (/)
- Theme 카테고리 섹션을 추가해요.
- Theme 카테고리 Item을 클릭 시 Theme 페이지(/theme/:themeKey)로 이동해요.
- 실시간 급상승 선물랭킹을 추가해요.
- 필터 기능을 hooks를 사용하여 구현해요. (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
- 상품 목록을 처음에는 6개만 보여지게 해요. 더보기를 누르는 경우 상품 목록을 더 보여줘요. (접기 버튼을 누르면 다시 6개만 보여지게 해요)

4. Theme 페이지(/theme/:themeKey)
- [ ] Header 섹션을 추가해요.
- 재사용성을 고려하여 Header 섹션을 만들어요. (themeKey에 따라 label, title, description, backgroundColor가 달라짐)
- 상품 목록 섹션을 추가해요.

5. 로그인 페이지(/login)
ID와 PW를 입력하면 로그인이 되도록 구현해요. (ID와 PW는 아무 값을 입력해도 통과되도록 해요.)

6. 나의 페이지(/my-account)
로그아웃을 할 수있는 버튼을 추가해요.

## Step2 인증 프로세스 구현
### 로그인 페이지에서 ID와 PW를 입력하면 직전 페이지로 Redirect 되도록 구현
- Fake 로그인 기능을 구현
1. 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 authToken key에 저장
2. 모든 페이지 진입 시 authToken을 토대로 로그인 여부 판단 로직 추가(ContextAPI 활용)
3. Header에서 로그인 한 경우 내 계정을 로그인 하지 않은 경우 로그인 버튼을 추가
4. 내 계정(/my-account) 페이지는 로그인 한 사람만 접근 가능하게 구현 (로그인 하지 않은 유저는 로그인 페이지로 연결)
5. 내 계정 페이지에서 로그아웃을 할 수 있도록 구현 (로그아웃 후 메인 페이지(/) 로 Redirect 되도록 해요)

## Step3 
### 질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?
1. SPA에서 페이지 간 이동을 구현하려면 URL 경로를 사용해야하는데, React Router 없이 관리하기 어렵습니다. 따라서 페이지 간 이동이 불편해지는 단점이 발생합니다.
2. 경로 변경에 따른 컴포넌트 상태 관리가 어렵습니다.
3. 뒤로 가기, 앞으로 가기 등의 브라우저 네비게이션 기능을 구현하기 어렵습니다.

### 질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)
1. 리액트 Context
-  Context를 사용하면 테마 상태를 최상위 컴포넌트에서 관리하고 하위 컴포넌트에서 쉽게 접근할 수 있습니다.

2. Redux
많은 컴포넌트에서 상태를 공유하고 업데이트할 필요가 있을 때 Redux를 사용하면 중앙 집중식으로 상태를 관리할 수 있어 유용합니다. 예를 들어, 쇼핑몰의 장바구니 기능이나 제품 필터링 기능을 관리할 때 Redux를 사용하면 상태 관리가 용이합니다.

### 질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?
1. Local Storage:
- 특징: 브라우저에 영구적으로 데이터를 저장하며, 브라우저를 닫아도 데이터가 유지됩니다. 용량 제한은 보통 5MB입니다.
- 사용 예시: 사용자 설정(테마, 언어 등)이나 비영구적인 사용자 데이터(장바구니 아이템)를 저장할 때 유용합니다.

2. Session Storage:
- 특징: 세션 당 데이터를 저장하며, 브라우저 탭이나 창을 닫으면 데이터가 삭제됩니다. 용량 제한은 Local Storage와 비슷하게 5MB입니다.
- 사용 예시: 탭 간에 유지되어야 하는 임시 데이터(폼 입력 값, 페이지 간 임시 상태)를 저장할 때 적합합니다.

3. Cookies:
- 특징: 서버와의 통신에 사용되며, 만료 기간을 설정할 수 있습니다. 용량 제한은 약 4KB로 작습니다. HttpOnly 속성을 설정하면 JavaScript로 접근할 수 없으며, 보안이 필요할 때 사용됩니다.
- 사용 예시: 사용자 인증 정보(세션 토큰), 트래킹 정보, 사용자 식별 정보를 저장할 때 사용됩니다. 서버와의 통신에 필수적인 데이터를 저장할 때 적합합니다.