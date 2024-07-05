# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

## **경북대 FE\_정솔빈\_2주차 과제**

### Week 2. 1단계 - 페이지 만들기

**할 일 목록: **

- [x] Header와 Footer는 보여질 수 있게 적용
- [x] 메인페이지(/)
  - [x] Theme 카테고리 섹션 추가
  - [x] 실시간 급상승 선물랭킹 hooks를 이용한 필터기능 구현
  - [x] 6개의 상품만 보이도록 만들기 (더보기와 접기 버튼 만들기)
- [x] Theme 페이지
  - [x] Header 섹션 추가
  - [x] 상품 목록 섹션 추가
- [x] 로그인 페이지에서 ID, PW 입력하면 로그인이 되도록 구현
- [x] 나의 페이지에서 로그아웃 할 수 있는 버튼 추가

### Week 2. 2단계 - 인증 프로세스 구현

2단계 과제 내용을 보기 전 2주차 과제 결과물 예시 링크를 보며 1단계 과제를 수행했습니다. 그래서 마지막 요구 사항이였던 나의 페이지에 로그아웃 할 수 있는 버튼 추가 단계에서 2단계 요구 사항을 미리 구현한 내용이 있어 먼저 구현한 내용은 주석을 추가해 해당 단계를 다시 한번 생각해보고자 합니다.

- [x] 로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 authToken key에 저장
- [x] 모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직을 추가 (ContextAPI 활용)
- [x] Header에서 로그인 한 경우 내 계정을 로그인 하지 않은 경우 로그인 버튼을 추가
- [x] 내 계정 페이지는 로그인 한 사람만 접근 가능하게
- [x] 내 계정 페이지에서 로그아웃 가능하고 로그아웃 후 메인 페이지로 Redirect 되는 기능 추가

### Week 2. 3단계 - 질문의 답변을 README에 작성

- 질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?

- 질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)

- 질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?

</br>

**코드 작성하면서 어려웠던 점**

- 반응형 컴포넌트를 예시 화면처럼 나오도록 수정하는데 많은 시간을 투자하였습니다. 반응형 컴포넌트를 작성하는 꿀팁이 있으신가요?
- ContextAPI에 대해 처음 알게되어 이에 관해 찾아보고 코드를 작성하는데 오랜 시간이 걸렸습니다.
- import의 순서에 따라 의존성 문제가 발생해 전에는 빠른 수정을 눌러 문제를 해결했지만 모듈의 순서를 고려했지만 이번 코드에서는 의존성 문제를 고려하며 순서를 변경해 오류를 해결해보았습니다.

**마무리 및 질문**

1. ~~Theme 페이지의 상품 목록 섹션을 추가하는 과정에서 전에 만들었던 GoodsList의 items를 가져오는 방법을 고민하다가 구글링을 통해 함수를 이용해서 값을 전달할 수 있다는 것을 알게되었습니다. 함수를 이용한 방법을 여러 번 시도하다가 오류를 해결하지 못하고 결국 하드코딩으로 items를 다시 입력했습니다. 이 상황에서 GoodsList를 상위 폴더로 옮기고 Props로 컴포넌트를 전달받는게 좋을까요? 자식 컴포넌트 간의 데이터 전달이 가능한가요? 가능하다면 그 방법이 궁금합니다.~~
   => 해결 완료

2. 로그아웃 버튼에 Button 컴포넌트의 darkgray 테마를 적용했습니다. 버튼 컴포넌트를 재사용하다 보니 MyAccountPage.tsx 코드에서 버튼의 크기를 조절하려고 했으나 <LogoutButton />으로 컴포넌트를 사용하고 아래 스타일 코드를 추가하면 button 컴포넌트의 테마가 적용되지 않습니다.

```
const LogoutButton = styled(Button)`
  margin-top: 20px;
`;
```

버튼 컴포넌트의 테마와 내용은 불러오는데 스타일을 더 추가하고 싶다면 결국 버튼 컴포넌트를 수정해야 하나요? MyAccountPage.tsx파일에서는 버튼 스타일에 대해 추가할 수 없나요?

---

### 새롭게 알게 된 점

**React 상태 관리 라이브러리**
규모가 있는 컴포넌트의 경우 상태 관리가 복잡해지기 때문에 props를 전달하는게 아니라 id 값을 기반으로 컴포넌트를 만들어서 효율성을 높이는 작업을 하기 위해 전역 상태 관리를 사용한다.

- Recoil

  - **Atom**은 상태를 말하며 컴포넌트에 씌여지고 읽혀질 수 있음. **selector**는 하나의 추출된 state이며 상태를 기반으로 하는 파생 데이터를 계산하는데 사용.

  [Recoil 시작하기] : https://recoiljs.org/ko/docs/introduction/getting-started/

- Redux

  - **Action**이라 불리는 '평범한 객체를 통해 일어날 변경'을 명시, 그리고 각각의 액션(action)이 전체 애플리케이션의 상태(state)를 어떻게 변경할지 결정하는 특별한 함수인 **reducer**를 작성.

  - 보통의 Redux 앱에는 하나의 루트 리듀서 함수를 가진 단 하나의 저장소가 있으며 앱이 커짐에 따라 루트 리듀서를 상태 트리의 서로 다른 부분에서 개별적으로 동작하는 작은 리듀서들로 나눌 수 있음

  ```
  import { combineReducers } from 'redux'

  import addsubReducer from './reducers/addsub'
  import countingReducer from './reducers/counting'

  const rootReducer = combineReducers({
    value: addsubReducer,
    count: countingReducer
  })

  export default rootReducer
  ```
