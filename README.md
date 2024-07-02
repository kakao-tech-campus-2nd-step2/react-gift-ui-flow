# 1️⃣ 1주차 프로젝트 세팅 & 컴포넌트 - React 입문
## ⚙️ 1단계 - 프로젝트 세팅
### 📄 기능 목록
- [x] CRA 기반 TypeScript 프로젝트 생성
- [x] 절대 경로 설정
- [x] prettier 설치 및 룰 설정
- [x] eslint 설치 및 eslint-config-airbnb 룰 설정
- [x] lint-staged, husky 설치 및 자동화 설정
- [x] emotion 스타일 라이브러리 설치
- [x] reset css 적용
- [x] .gitignore 추가
- [x] 불필요한 코드 및 파일 정리
- [x] 폴더 구조 생성
  - apis: Axios 인스턴스 설정 파일 등 API 관련 설정 파일을 관리합니다.
  - assets: 이미지, 폰트, 아이콘 등의 정적 파일을 관리합니다.
    - styles: 글로벌 스타일 설정 파일입니다. 기본 스타일을 재설정하거나 공통 스타일을 정의합니다.
  - components: 컴포넌트를 모아놓은 디렉토리입니다.
    - common: 공통 컴포넌트를 모아놓은 디렉토리입니다.
  - hooks: 커스텀 훅을 모아놓은 디렉토리입니다.
  - pages: 페이지 컴포넌트를 모아놓은 디렉토리입니다. 각 페이지는 일반적으로 라우팅의 엔드포인트가 됩니다.
  - store: 애플리케이션의 전체 상태 관리를 위한 스토어 파일입니다.
  - utils: 유틸리티 함수들을 모아놓은 파일입니다.
    - constants: 애플리케이션 전반에서 사용되는 상수들을 정의합니다.

## 📕 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현
### 📄 기능 목록
- [x] Stroybook 설치
- [x] Button 컴포넌트 구현
  - [x] theme props에 따른 버튼 컬러와 디자인이 다르게 구현
  - [x] size props에 따른 버튼의 크기를 다르게 구현(value가 responsive인 경우 미디어 쿼리에 따라 사이즈가 다르게 구현)
  - [x] Button 기본 속성들을 모두 사용할 수 있게 Storybook 구현
- [x] Input 컴포넌트 구현
  - [x] disabled props에 따른 비활성화 및 디자인 구현
  - [x] invalid props에 따른 값이 잘못되었음을 디자인하도록 구현
  - [x] size props에 따라 버튼의 크기를 다르게 구현(value가 responsive인 경우 미디어 쿼리에 따라 사이즈가 다르게 구현)
  - [x] Input 기본 속성들을 모두 사용할 수 있게 구현
- [x] Image 컴포넌트 구현
  - [x] ratio props에 따른 이미지 비율을 설정할 수 있도록 구현(value가 number로 16/9로 넘겨진 경우 16:9비율로 보여짐, square을 설정한 경우 정사각형으로 보여짐)
  - [x] raduis props에 따른 모서리를 둥글게 구현(value가 number인 경우 number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여짐)
  - [x] Img 기본 속성들을 모두 사용할 수 있게 구현
- [x] GoodsItem 컴포넌트 구현
  - [x] Default 형태와 Ranking 형태의 컴포넌트를 각각 구현 (자세한 디자인은 스토리북 참고)
  - [x] 공통으로 imageSrc, subtitle, title, amount Props를 넘겨 받음
  - [x] Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨 받음. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여짐
- [x] Container 컴포넌트 구현
  - [x] Container 스토리북 구현
  - [x] FullScreen 스토리북 구현
- [x] Grid 컴포넌트를 구현
  - [x] NumberColumns 스토리북 구현
  - [x] ResponsiveColumns 스토리북 구현


## 🤔 3단계 - 질문의 답변을 README에 작성
### 질문 1: Webpack은 무엇이고 어떤 역할을 하고 있나요?

Webpack은 모듈 번들러로, 여러 개의 파일과 그 파일들 간의 종속성을 하나의 파일이나 여러 개의 파일로 묶어서 웹 애플리케이션에 필요한 리소스를 효율적으로 제공합니다.

### Webpack의 주요 역할:

1. **번들링:** 여러 자바스크립트 파일을 하나 또는 여러 개의 번들로 결합하여 최적화합니다. 이를 통해 네트워크 요청 수를 줄이고 로딩 시간을 단축할 수 있습니다.
2. **모듈 의존성 관리:** 파일 간의 종속성을 분석하고 올바른 순서로 결합하여 코드를 모듈화하고 관리하기 쉽게 만듭니다.
3. **로드 및 변환:** 로더를 사용해 다양한 파일 형식을 처리합니다. 예를 들어, Babel 로더를 사용해 최신 자바스크립트 코드를 브라우저가 이해할 수 있는 코드로 변환합니다.
4. **플러그인 시스템:** 플러그인을 통해 번들링 과정 중 파일 크기 압축, 코드 스플리팅, 핫 모듈 교체(HMR) 등의 작업을 수행할 수 있습니다.

### 질문 2: 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

브라우저는 기본적으로 JSX 파일을 직접 읽을 수 없습니다. JSX는 JavaScript의 확장 문법으로, 이를 일반 JavaScript 코드로 변환해야 합니다.

### 변환 과정:

1. **Babel:** JSX를 JavaScript 코드로 변환합니다. Babel은 JSX 문법을 React.createElement() 함수 호출로 변환하여 브라우저가 이해할 수 있는 순수 JavaScript 코드로 바꿉니다.
2. **Webpack과 Babel 통합:** Webpack의 Babel 로더를 사용해 프로젝트의 모든 JSX 파일을 JavaScript로 변환합니다. Webpack은 종속성을 분석하고, Babel을 사용해 JSX 파일을 변환한 후 번들링합니다.
3. **번들된 JavaScript 파일:** 최종적으로 변환된 JavaScript 코드는 하나의 번들 파일로 묶여 브라우저에서 실행됩니다.

### 질문 3: React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

React는 상태 변화(state change)를 감지하고, 이에 따라 컴포넌트를 업데이트합니다. 상태 변화가 발생했을 때 변화를 알아채는 메커니즘은 다음과 같습니다:

1. **setState 또는 useState:** 클래스 컴포넌트에서는 `this.setState`를, 함수형 컴포넌트에서는 `useState`를 사용해 상태를 업데이트합니다.
2. **상태 변화 감지:** `setState` 또는 `useState`를 호출하면 React는 상태 변경을 감지합니다. 이전 상태와 새로운 상태를 비교하여 실제로 변경이 발생했는지 확인합니다.
3. **리렌더링:** 상태 변화가 감지되면 해당 컴포넌트와 자식 컴포넌트가 다시 렌더링됩니다. React는 가상 DOM을 사용해 새로운 상태를 반영한 가상 DOM 트리를 생성하고, 이전 가상 DOM과 비교하여 실제 DOM에서 변경이 필요한 부분만 업데이트합니다.
4. **최적화 기법:** React는 불필요한 리렌더링을 방지하기 위해 `shouldComponentUpdate`, `React.memo`, `useMemo`, `useCallback` 등을 사용하여 변경된 부분만 효율적으로 업데이트합니다.

## 🛠️ 코드 리뷰 반영
### 📄 요구 사항
- [x] babel-preset-react-app 설치
- [x] package.json의 eslintConfig 제거
- [x] testing library와 typescript 패키지 devdependencies로 변경
- [x] README에 초기 폴더 구조에 대한 설명 기재
- [x] lint 대상 변경
- [x] QUESTION.md 추가