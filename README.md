# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

> 1단계: 프로젝트 세팅
>
> 2단계: storybook과 컴포넌트
>
> 3단계: 생각해보기 질문

## 프로젝트 설정 및 실행

- pnpm 패키지 매니저를 사용합니다.

1. 의존성 설치
   ```
   pnpm install
   ```
2. 프로젝트 실행
   ```
   pnpm start
   ```

## 프로젝트 설명

> 앞으로 6주동안 진행 할 프로젝트의 기반을 구축하고 Storybook으로 재사용 가능한 컴포넌트를 구현한다.

### 1. vite 선택 이유

- CRA의 불편 사항

  처음엔 Create React App(CRA)을 사용해 TypeScript로 개발을 진행했습니다. 하지만, [CRA가 TypeScript 버전 5를 공식적으로 지원하지 않아](https://github.com/facebook/create-react-app/pull/13071) TypeScript를 설정하는 데 어려움을 겪었습니다. TypeScript 5는 성능 향상, 새로운 기능, 더 나은 타입 시스템 등 여러 가지 이점을 제공하기 때문에, 이를 사용하지 못하는 것은 개발의 불편함이 생길 것이라 예상되었습니다. CRA에서 오버라이드나 craco를 이용해 문제를 해결할 수 있었지만, 오랜 기간 관리가 안되는 CRA 대신 다른 빌드 도구를 사용하고자 했습니다.

- 여러 빌드 도구를 비교한 후 최신 기술 지원이 가능하고, 설정이 간단한 Vite를 선택했습니다.

  | 항목                 | CRA                    | Vite                                       |
  | -------------------- | ---------------------- | ------------------------------------------ |
  | 빌드 속도            | 느림                   | 빠름                                       |
  | 개발 서버 속도       | 느림                   | 빠름                                       |
  | 레거시 브라우저 지원 | Babel 사용             | 추가 설정 필요                             |
  | 최신 웹 기술 지원    | Webpack 사용           | ESBuild 사용, 기본적으로 최신 웹 기술 지원 |
  | JavaScript 모듈      | CommonJS, ESM 지원     | ESM 기본 사용                              |
  | 개발 서버            | Webpack 개발 서버 사용 | 브라우저의 Native ESM 사용                 |

### 2. 코드 스타일

- ESLint: Airbnb 스타일 가이드 적용
- Prettier

  - import 정렬
    ```json
    "importOrder": [
      "<THIRD_PARTY_MODULES>", // third party 모듈
      "^@/(apis|assets|constants|hooks|mocks|pages|stores|utils)/(.*)$", // 절대 경로
      "^@/components/(.*)$", // 절대 경로 중 components 모듈
      "^@/types/(.*)$", // 절대 경로 중 types 모듈
      "^[./]" // 상대 경로 모듈
    ],
    ```
  - 다른 규칙

    ```json
    "importOrderSeparation": true, // import 그룹 사이에 빈 줄 추가
    "importOrderSortSpecifiers": true, // import specifier들을 알파벳 순 정렬
    "trailingComma": "es5", // ES5에서 허용되는 곳에 후행 쉼표 추가
    "tabWidth": 2, // 탭 너비를 2 스페이스로 설정
    "singleQuote": true, // 문자열을 작은 따옴표로 감싸기
    "semi": true // 문장 끝에 세미콜론 추가
    ```

### 3. 폴더 구조 설명

```jsx
  src
  ├── apis //외부 API 통신 로직
  ├── assets // 이미지, 폰트 등 정적 자원
  ├── components // UI 컴포넌트
  ├── constants // 상수 값
  ├── hooks // 커스텀 훅
  ├── mocks // 테스트용 샘플 데이터
  ├── pages // 페이지 컴포넌트
  ├── stores // 전역 상태 관리
  ├── styles // 스타일
  ├── types // 타입 정의
  └── utils // 유틸리티 함수
```

### 4. 구현한 컴포넌트

[story book 보러가기](https://667f189885180b31652d244f-wvfpkxjzuu.chromatic.com/)

### 5. 구현한 기능 목록

<details>
<summary>📝 step1 기능 목록</summary>

#### 프로젝트 생성

- [x] vite를 사용해 프로젝트 생성

#### 프로젝트 구조 및 관리

- [x] gitignore 추가
- [x] 프로젝트에 불필요한 코드 정리
- [x] 폴더 구조 세팅

#### TypeScript 관련 설정

- [x] Typescript 세팅
- [x] alias 설정
- [x] tsconfig 설정

#### 코드 스타일

- [x] ESLint, Prettier 추가
- [x] Lint 룰 세팅
- [x] prettier로 import 순서 정렬하기

#### style 관련 설정

- [x] emotion 스타일 라이브러리 추가
- [x] reset css 적용

</details>

<details>
<summary>📝 step2 기능 목록</summary>

#### 세팅

- [x] Storybook 설치

#### 공통 컴포넌트 구현

- [x] Button
- [x] Input
- [x] Image
- [x] GoodsItem
- [x] Grid
- [x] Container

#### story 추가하기

- [x] Button
- Form
  - [x] Input
- [x] Image
- GoodsItem
  - [x] default
  - [x] ranking
- Layout
  - [x] Grid
  - [x] Container

</details>

### 6. step3

#### 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?

- webpack은 JavaScript 애플리케이션 번들러입니다. JavaScript, CSS, 이미지, 폰트 등 다양한 파일과 모듈을 하나로 묶어 최적화합니다. 이러한 번들링 과정을 통해 웹 애플리케이션의 로딩 속도를 향상시키고, 의존성 관리를 효율적으로 할 수 있습니다. 또한, webpack은 다양한 최적화 기능을 제공하여 불필요한 코드를 제거하고, 파일 크기를 줄이는 데 도움을 줍니다. Create React App(CRA)에서도 기본적으로 webpack을 사용하여 개발 환경을 설정합니다.

#### 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

- JSX는 JavaScript의 확장 문법으로, 브라우저는 이를 직접 인식할 수 없습니다. 따라서 JSX를 Babel과 같은 트랜스파일러를 사용해 일반 JavaScript로 변환해야 합니다. 변환된 JavaScript 코드와 다른 모듈들은 webpack과 같은 번들러를 통해 하나의 파일로 묶여 최적화됩니다. 이 번들 파일을 브라우저가 로드하게 되면, 브라우저는 JSX로 작성된 React 컴포넌트를 이해하고 렌더링할 수 있게 됩니다.

#### 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

- React에서 상태 변화는 setState 함수를 통해 감지됩니다. 상태가 변경되면 React는 해당 컴포넌트의 렌더링을 다시 트리거하여 UI를 업데이트합니다. React는 이전 상태와 새로운 상태를 비교하여 실제 DOM에 최소한의 변경만을 적용합니다. 상태가 객체일 때는 얕은 비교를 사용하므로, 객체의 일부 속성만 변경되더라도 전체 객체를 새로운 객체로 만들어 setState를 호출해야 합니다. 또한, setState는 비동기적으로, 배치로(한번에) 처리되기 때문에 상태 업데이트 직후에 상태 값을 읽을 때는 컴포넌트의 라이프 사이클을 고려해야 합니다.
