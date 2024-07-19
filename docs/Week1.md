# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

## step1

- [x] Create React App을 사용하지 않고 별도의 번들러를 선택하여 적용해요.
- [x] 여러 번들러 중 특정 번들러를 선택하여 적용한 이유를 README에 적어봐요.
- [x] 본인만의 기준으로 일관된 코드를 작성해주세요.
- [x] 기능 단위로 나누어 커밋을 해주세요.

## step2

- [x] storybook 사용
- [x] Button 컴포넌트 추가
- [x] Input 컴포넌트 추가
- [x] Image 컴포넌트 추가
- [x] GoodsItem 컴포넌트 추가
- [x] Grid, Container 컴포넌트 추가

## step3

### 질문 1: webpack은 무엇이고 어떤 역할을 하고 있나요?

**webpack**은 최신 JavaScript 애플리케이션을 위한 모듈 번들러이다. webpack은 다양한 역할을 수행한다.

1. **모듈 번들링**: 여러 파일을 하나의 파일로 결합하여 배포와 관리를 용이하게 한다.
2. **의존성 관리**: 파일 간의 의존성을 분석하고, 필요한 순서에 맞춰 파일을 결합한다.
3. **로더(Loaders)**: 다양한 파일 형식을 처리하기 위해 사용된다.
4. **플러그인(Plugins)**: 추가 기능을 제공하여 빌드 과정을 확장하고 최적화할 수 있습니다.

### 질문 2: 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

1. **트랜스파일링(Transpiling)**: Babel과 같은 트랜스파일러를 사용하여 JSX를 순수 JavaScript 코드로 변환한다. Babel은 `@babel/preset-react` 프리셋을 사용하여 JSX를 `React.createElement` 호출로 변환한다.
2. **번들링(Bundling)**: webpack과 같은 모듈 번들러를 사용하여 변환된 JavaScript 파일을 하나의 번들 파일로 묶는다. 이 과정에서 Babel 로더를 webpack 설정에 추가하여 트랜스파일링을 자동화한다.

### 질문 3: React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

1. **useState Hook**: 함수형 컴포넌트에서 상태를 관리하기 위해 사용된다. `useState`는 상태 변수와 상태를 갱신하는 함수를 반환한다. 상태 갱신 함수가 호출되면 컴포넌트가 다시 렌더링된다.
2. **useEffect Hook**: 상태나 props의 변화에 반응하는 부수 효과(side effect)를 수행할 수 있다. 특정 상태나 props가 변경될 때마다 실행될 코드 블록을 정의할 수 있다.
