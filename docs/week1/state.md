# 상태 관리 직접 구현해보기

# 상태 관리

## 리액트의 상태

: 변경이 가능한 값

### UI

- 다크/라이트 모드, 드롭다운 메뉴의 선택 상태, 모달의 열림/닫힘 상태 등
- 주로 useState Hook으로 로컬 상태 또는 Recoil, Zustand 등 라이브러리로 관리

### URL

: 브라우저에서 관리되는 상태값

- URL의 파라미터, 쿼리 스트링
- 페이지 번호, 필터링 조건 등
- react router와 같은 라이브러리로 URL 상태 관리

### form

: 사용자의 입력

- 입력 값, 유효성, 로딩, 제출여부 등
- useState Hook으로 로컬 상태 또는 react-hook-form과 같은 라이브러리로 상태 관리

### 외부 데이터

: 클라이언트에서 서버로 요청을 통해 가져온 값

- API 호출 결과 등 (통신 상태)
- react-query와 같은 라이브러리로 상태 관리

#### 🚨 상태 관리 고려사항

- 상태를 어디에 위치할 것인가? 전역 or 클로저
- 상태가 유효한 범위는 어떻게 지정할 것인가?
- 상태 변화를 어떻게 감지할 것인가?

# Flux 패턴

## MVC 패턴

: 전통적인 소프트웨어 디자인 패턴

### Model

- 데이터와 비즈니스 로직관리
- 데이터베이스와 상호작용
- 데이터 검증

### View

- UI 구성
- model의 데이터를 보여줌

### Controller

- 사용자 입력 처리
- 사용자의 액션에 따라 model 업데이트 후 결과를 view에 반영

### 리액트의 MVC

- view: 컴포넌트
- model, controller: 상태관리 라이브러리
- 컴포넌트의 state와 props에서 model의 데이터를 다룸

#### ❗ 상태가 많아지면 상태 추적이 어려움

- 원인: 양방향 데이터 바인딩
  - view(HTML)가 model(JavaScript)의 데이터를 업데이트
  - model(JavaScript)이 view(HTML)를 업데이트

## Flux 패턴

: 페이스북에서 개발한 아키텍처 패턴

### Action

: 작업을 처리할 액션과 포함시킬 데이터를 정의

- 모든 이벤트를 나타냄

### Dispatcher

: 콜백 함수로 action이 정의한 타입과 데이터를 store에 전달

### Store

: action 타입에 따라 데이터를 어떻게 변경할지 메서드로 정의

- 상태를 업데이트하고 변경사항을 view에 전달

### View

: store에서 만들어진 데이터를 가지고 화면을 렌더링

- 리액트의 컴포넌트
- 사용자의 입력을 받으면 action을 호출해 상태 업데이트

#### ❗ 단방향 데이터 바인딩의 장점

- 데이터 흐름이 직관적
- 컴포넌트 간의 데이터 의존성을 줄임
- 상태 변화를 쉽게 추적 가능

# 라이브러리 없이 상태 관리 해보기

#### 📌 useState의 상태를 클로저 외부로 분리하기

- useState의 한계
  - 컴포넌트 내부의 상태를 관리 → 컴포넌트별로 다른 상태 존재
- 할 일
  - useState 외부의 어딘가에 상태를 두기
  - 외부의 상태 변경을 감지해 컴포넌트를 리렌더링하기

## store

: 상태를 나타내는 무언가

### store의 타입

```tsx
type Initializer<T> = T extends any ? T | ((prev: T) => T): never

type Store<State> = {
	get: () => State
	set: (action: Initializer<State>) => State
	subscribe: (callback: () => void) => () => void
```

- **get**: 함수로 정의해 항상 최신값을 받아옴
  - 함수 호출 시 상태를 직접 참조 가능
- **set**: useState와 동일하게 값 또는 함수를 받아와 업데이트
- **subscribe**: store의 변경을 감지하고 싶은 컴포넌트가 자신의 callback 함수를 등록
  - store 값이 변경될 때마다 등록된 callback을 실행
  - store를 참조하는 컴포넌트는 리렌더링 가능

### createStore

: store 만들기

- 관리할 상태를 내부 변수로 가짐
  - get에서 변수의 최신값 제공
  - set에서 변수 최신화

```tsx
export const createStore = <State extends unknown>(
  initialState: Initializer<State>
): Store<State> => {
  let state =
    typeof initialState !== "fuction" ? "initialState" : initialState();

  const callbacks = new Set<() => void>();
  const get = () => state;
  const set = (nextState: State | ((prev: State) => State)) => {
    state =
      typeof nextState === "function"
        ? (nextState as (prev: State) => State)(state)
        : nextState;

    callbacks.forEach((callback) => callback());

    return state;
  };
  const subscribe = (callback: () => void) => {
    callbacks.add(callback);

    return () => {
      callbacks.delete(callback);
    };
  };

  return { get, set, subscribe };
};
```

1. store의 초기값 설정
   - 함수 실행 또는 ‘initialState’ 그 자체를 할당
2. callbacks를 Set으로 선언
   - Set은 원시값이나 객체에 상관없이 유일한 값 저장
   - 중복 없이 콜백 함수 저장 가능
3. get 함수
   - 매번 최신값 가져오기 가능
4. set 함수
   - 새로운 값 설정
   - 값을 설정한 이후 모든 callback 실행해 컴포넌트의 렌더링 유도
5. subscribe 콜백 함수
   - Set에 callback을 등록
   - set 함수가 호출되어 상태 변경 시 callbacks에 저장된 모든 콜백 함수 호출
     - 상태 변경을 구독한 모든 함수가 실행
   - subscribe 반환 함수 호출 시 callbacks에서 해당 콜백 제거
6. get, set, subscribe를 객체로 반환

### useStore 커스텀 훅

```tsx
export const useStore = <State extends unknown, Value extends unknown>(
  store: Store<State>,
  selector: (state: State) => value
) => {
  const [state, setState] = useState<State>(() => selector(store.get()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const value = selector(store.get());
      setState(value);
    });

    return unsubscribe;
  }, [store, selector]);

  return state;
};
```

1. selector 함수: store의 상태에서 어떤 값을 가져올지 정의
   - store가 객체인 경우 일부값만 변경되어도 useState를 실행하지 않아 불필요한 리렌더링 방지
2. store 값을 초깃값으로 하는 state 생성
   - useState가 컴포넌트의 렌더링을 유도함
3. useEffect로 store 값이 변경될 때마다 state 값이 변경
   - createStore 내부에서 값이 변경될 때마다 subscribe에 등록된 함수를 실행
4. useEffect의 클린업 함수로 unsubscribe 등록
   - useEffect 동작 후 callback에서 해당 함수를 제거

### 사용 예제

```tsx
const store = createStore({ count: 0 });

export const Counter = () => {
  const counter = useStore(
    store,
    useCallback((state) => state.count, [])
  );

  function handleClick() {
    store.set((prev) => ({ ...prev, count: prev.count + 1 }));
  }

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleClick}>+</button>
    </>
  );
};
```

#### 💡 이미 잘 만들어진 Hook과 라이브러리 사용하기~

- `useSubscription`: 외부에 있는 데이터를 가져와 사용하고 컴포넌트를 리렌더링함

## store에 context 추가하기

#### ❓ 상태 관리에서 Context를 사용하는 이유

- 문제: 전역변수와 같은 1개의 store를 가짐 → 동일한 형태의 여러 개의 store 사용 불가
- 해결: Context 사용하기

### Context 생성하기

```tsx
export const CounterStoreContext = createContext<Store<CounterStore>>(
  createStore < CounterStore({ count: 0 })
);

export const CounterStoreProvider = ({
  initialState,
  children,
}: PropsWithChildren<{
  initialState: CounterStore;
}>) => {
  const storeRef = useRef<Store<CounterStore>>();

  if (!storeRef.current) {
    storeRef.current = createStore(initialState);
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};
```

1. Context를 생성할 때 store도 함께 생성
2. store를 생성한 적 없다면 최초에 한 번 생성
   - storeRef를 사용해 CounterStoreProvider가 최초 렌더링할 때만 store를 생성
   - Provider로 넘기는 props가 불필요하게 변경되어 리렌더링 하는 것을 방지
3. Provider로 store 값 전달
   - 하위 컴포넌트가 Context를 통해 store 접근 가능

### Context 사용하는 hook 만들기

```tsx
export const useCounterContext = <State extends unknwon>(
  selector: (state: CounterStore) => State
) => {
  const store = useContext(CounterStoreContext);
  const subscription = useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => selector(store.get()),
        subscribe: store.subscribe,
      }),
      [store, selector]
    )
  );

  return [subscription, store.set] as const;
};
```

1. useStore 커스텀 훅 대신 리액트의 useStoreSelector 사용
   - 커스텀 훅과 기능은 비슷하지만 불필요한 반복을 제거해 최적화가 이루어짐
2. useContext 훅으로 store에 접근
   - store에서 값을 직접 찾는 것이 아니라 Context.Provider에서 제공된 store를 찾음

### 사용 예제

```tsx
const ContextCounter = () => {
	const [counter, setStore] = useCounterContext(
		useCallback((state: CounterStore) => state.count, []),
	)

	function handleClick() {
		setStore((prev) => ({...prev, count: prev.count + 1})
	}

	return (
		<>
			<div>{counter}</div>
			<button onClick={handleClick}>+</button>
		</>
	)
}

export const test = () => {
	return(
		 <>
			 <ContextCounter />
			 <CounterStoreProvider initialState={{ count: 10 }}>
				 <ContextCounter />
			 </CounterStoreProvider>
		 </>
	)
}
```

- CounterStoreProvider가 없어도 store 사용 가능
  - CounterStoreContext를 만들 때 초깃값을 인수로 넘김
  - Provider가 없을 때 전역으로 만들어진 store를 사용
- Context는 가까운 Provider를 참조
  - 첫 번째 ContextCounter의 초깃값: 0
  - 두 번째 ContextCounter의 초깃값: 10

#### 💡 **상태 관리 라이브러리 살펴보기**

- Recoil, Jotai: Context, Provider 기반으로 작은 상태 관리
- Zustand, Redux: 하나의 큰 store를 기반으로 상태 관리
  - Context가 아니라 store가 가지는 클로저 기반으로 생성
  - store의 상태가 변경되면 상태를 구독하는 컴포넌트에 전파해 리렌더링
