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

    사용자 편의성이 없어집니다. URL이 하나라면, 사용자는 페이지를 구분할 수 없을 것이고 페이지 내비게이션과 URL 공유와 같은 기능을 사용할 수 없습니다.
    물론 history API를 통해 직접 구현할 수도 있으나 React Router를 대체하긴 쉽지 않습니다.
    페이지를 구분하기 위해 React Router를 통해 서버 요청 없이 URl을 바꿀 수 있는데, 서버 요청을 통해 view를 바꾼다면, URL이 바뀔 때마다 html 문서가 바뀌어 상태를 잃게 됩니다. (새로고침)

___질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)___

    Props Drilling 하기 싫을 때, UI에 light/dark 모드를 적용할 때, 
    Context(provider)의 value가 바뀔 때마다 의존하는 컴포넌트(consumer)들 모두 리렌더링 되기 때문에 트리 구조 상관없이, 상단 memo된 컴포넌트의 유무를 신경쓰지 않고, 리렌더링 시키기 좋습니다. 
    실제로 props drilling 하지 않고 custom hook을 써서 해봤는데 잘 안됐습니다.
    상태를 life up 후 drilling하면, state가 바뀔 때 마다 의존하는 컴포넌트의 UI가 바뀌긴 하지만, 
    나중에 트리 중단에서 memo를 통해 리렌더링을 막을 수도 있어서 drilling을 하면 안되겠다는 생각을 했고 아래와 같은 hook을 만들어 사용했었습니다.

    function useTheme() {
        const [ selectedTheme, setSelectedTheme ] = useState(`themeId`);
        return {
            selectedTheme,
            setSelectedTheme
        }
    }

    function Button({ themeId }) {
        const { setSelectedTheme } = useTheme();
        const onClickHandler = () => setSelectedTheme(themeId);
        return <button onClick={onClickHandler}>{themeId}번 테마로 바꾸기</button>
    }

    function UIComponent() {
        const { selectedTheme } = useTheme();
        return (. . .);
    }

    useTheme을 통해 하나의 상태를 만들어 공유하고 싶었습니다.
    상태가 drilling을 통해 연결되어 있지 않더라도,
    setSeelctedTheme을 통해 state를 바꾸면 useTheme에 저장이 될 것이고,
    최소한 UICoponent가 리렌더링될 때는 useTheme을 다시 호출하니까 가장 최신의 selectedTheme이 반환되겠지 했는데
    UIComponent가 리렌더 돼도 useTheme의 반환 값은 바뀌지 않았습니다.
    왜 안되지?라는 생각에 진행이 막혔었습니다.

    이는 useTheme을 호출 할 때 마다 각각의 상태가 만들어져 다 따로 놀게 된다는 것을 알게되었고(확실하진 않습니다.) 
    이후 그냥 Context API를 활용했습니다.
    Context API를 사용하면 "상단 -> 하단 흐름"과 "같은 provider 중첩x"만 지키면 트리 구조 상관 없이 하나의 값을 공유할 수 있습니다.
    추가적으로 redux를 사용한다면, 하나의 상태를 내부 store에 저장해 여러 곳에서 공유할 수 있습니다.
    이때, redux는 one-way data flow 구조로 짜여있고, 동작이 store, action, reducer, subscriber를 통해 정형화되어
    공유된 상태를 변화시키는 것과 해당 영향 예측을 보다 쉽게 할 수 있습니다.

___질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?___

    Local Storage : 데이터는 영구적으로 저장됩니다.
    Session Storage : 브라우저 또는 탭이 닫힐 때 데이터가 날아갑니다. 
    Cookies : 데이터 만료 기간을 설정할 수 있습니다.
