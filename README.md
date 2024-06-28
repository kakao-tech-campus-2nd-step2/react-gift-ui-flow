## React Gift - react foundation

### CRA의 역할

create-react-app은 webpack, jest, babel 등 프론트엔드 개발을 위해 많은 것들을 직접 설정해야 하는 번거로움을 해결하고자 나온 도구이다.

### react-scripts dependencies

> This package includes scripts and configuration used by [**Create React App**](https://github.com/facebook/create-react-app).
> 
> [출처](https://www.npmjs.com/package/react-scripts?activeTab=readme)

create react app을 실행했을 때 개발 환경을 자동으로 설치하는 npm 패키지이다.

- babel: es2015+ 코드를 이전 Javascript 버전 엔진에서 실행될 수 있는 코드로 변환해주는 라이브러리이다.
- css-loader/style-loader: 빌드된 결과물에 스타일시트를 주입해주는 라이브러리이다. 라고만 정리해둬도 좋을 것 같다.
- eslint: 코드 컨벤션에 위배되는 코드를 자동으로 검출해주는 도구이다.
- webpack: 자바스크립트 모듈 번들러이다. 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축하고 최적화하는 라이브러리이다.
- jest: javascript + test로, 자바스크립트를 위한 테스트 라이브러리이다.
- tailwindcss: 이건 왜있는지 잘 모르겠다. postcss도 tailwind때문에 있는걸지도 모르겠다.
- webpack-dev-server: vscode의 라이브 서버와 비슷한 기능인데, 웹팩의 빌드 대상 파일이 변경되었을 때 변경 사항을 브라우저에서 즉각적으로 확인할 수 있도록 도와준다.

## 프로젝트 세팅할 때 고려해야 하는 사항들

1. 코드 컨벤션
    1. airbnb-base를 사용하기로 했다.
2. 전역 state 관리 라이브러리
    1. Context API가 기본이라 이걸 사용하기로 했다.
3. 스타일링은 어떻게 하지?
    1. emotion 스타일 라이브러리를 추가하자.
    2. css-in-js를 사용하면 런타임 오버헤드가 추가적으로 발생한다는 말이 있는데 사실 개인적인 생각으로는 css-in-js 라이브러리를 사용하더라도 성능에 크게 영향을 주지 않을 것 같다.
4. 폴더 구조
    1. src
        1. assets
            1. icons
            2. images
        2. components [(참고)](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)
            1. atoms
            2. molecules
            3. orgamisms
        3. pages
        4. dto
        5. hooks

### 근데..

vite를 사용하고 싶다.
cra는 변경 사항이 생기는 경우 번들링을 거쳐 변화를 화면에 표시하기 때문에 느리다. 반면에 vite는 모듈을 브라우저가 직접 받아올 수 있는 Native ESM 방식을 사용하기 때문에, 변화를 감지하는 속도가 빠르다. 그리고  vite는 디펜던시를 사전에 번들링하고 캐싱하기 때문에 dev server의 시작 속도도 빠르다.

## ESM vs CommonJS

ESM은 ES6에 도입된 모듈 시스템이고, CommonJS는 Node.js에서 스크립트 모듈화를 위해 출시된 모듈 시스템이다. 둘다 브라우저에 호환이 되지만, 문법에 약간 차이가 있다. ESM은 `export/import`로 모듈을 내보내고 가져오는 반면 CommonJS는 `require/module.exports`문을 사용하여 모듈을 사용한다.

### bundler vs transpiler

번들러는 **각각의 모듈 의존성을 해결하여 하나의 자바스크립트 파일로 만드는 도구**이다. 이미지 압축, 최소화(Minification) 등의 여러가지 기능들도 제공하며 유명한 번들러로는 Webpack, Parcel, Rollup 등이 있다.

트랜스파일링(Transpiling)이란 **특정 언어로 작성된 코드를 비슷한 다른 언어로 변환시키는 행위**를 말하며 이를 해주는 것이 트랜스파일러(Transpiler)이다. ES2015+ 코드를 이전 버전에서 돌아가게끔 변환시켜주는 Babel도 트랜스파일러의 일종이고, 타입스크립트나 JSX 코드를 자바스크립트 코드로 변경해주는 것도 트랜스파일러이다. Vite는 esbuild 또는 SWC라는 트랜스파일러를 사용할 수 있는데, SWC는 한국인 대학생 개발자가 만들었다는 사실이 좀 놀라웠다.

bundler은 모듈 단위의 코드 변환, transpiler은 조금 더 작은 단위의 코드 변환이라고 생각할 수 있고 서로 상호 보완적인 관계라고 생각할 수 있다.

### Polyfill

Polyfill은 이전 버전에서 지원하지 않는 기능들에 대한 코드를 메꿔주는(fill) 것을 의미한다. 특정 메소드나 프로퍼티가 존재하는지 여부를 확인하고 없을 경우 구현하여 빈 곳을 채워주는 것이다. transpiling이랑 약간 다른데, polyfill은 없는 메소드를 추가해주는 것이기 때문에, 그 예시로  `Array.includes()`를 직접 구현하여 Array Object의 static 메소드로 추가해주는 것을 들 수 있고 transpiling은 spread operator `...`을 Object.assign()과 같은 메소드를 이용한 형식으로 바꿔주는 것을 예시로 들 수 있다.

## Vite로 개발환경 셋팅하기

### CRA에서 사용하던 의존성 생각해보기

- babel: vitejs/plugin-react라는 플러그인에서 esbuild과 babel을 이용하여 코드를 빌드/변환한다.
- css-loader/style-loader: postcss-import가 css-loader과 비슷한 역할을 한다.
- eslint: 코드 컨벤션에 위배되는 코드를 자동으로 검출해주는 도구이다. 이건 cra와 마찬가지로 vite로 개발 환경 초기화 시 자동으로 설치된다.
- webpack: vite dependency인 rollup과 esbuild를 통해 빌드하는 것으로 대체된다.
- jest: javascript + test로, 자바스크립트를 위한 테스트 라이브러리이다. 추가로 설치해줘야 한다.
- tailwindcss: 필요가 없다
- webpack-dev-server: vite 자체적으로 SWC를 이용한 HMR을 지원하는 dev 서버를 제공하기 때문에 필요하지 않다.

## 구현할 기능 목록

### Step 1.

- [ ]  초기 셋업 (yarn create vite)
- [ ]  테스트를 위해 jest 설치
- [ ]  airbnb 코드 컨벤션 적용을 위한 라이브러리 설치
- [ ]  위에서 설치한 패키지를 바탕으로 eslint 및 prettier 설정
- [ ]  tsconfig 설정
- [ ]  alias 설정하기
- [ ]  emotion 라이브러리 추가하기
- [ ]  reset css 적용하기
- [ ]  .gitignore에 필요한 내용 작성하기
- [ ]  불필요한 에셋 제거하기
- [ ]  폴더 구조 만들고 .gitkeep 파일을 만들어 커밋하기

### Step 2.

- [ ]  Storybook 설치
- [ ]  Storybook 프로젝트 설정
- [ ]  Button 컴포넌트 구현
    - [ ]  Theme Props에 따라 컬러와 디자인이 다르게 보이도록 구성
    - [ ]  size Props에 따라 다르게 보이도록 구성
    - [ ]  Button Element의 기본 속성들을 모두 사용할 수 있도록 구성 (ButtonProps가 HTMLButtonAttributes를 받을 수 있도록 spread 연산자를 사용하면 될 것 같다)
- [ ]  Theme 구현
    - [ ]  테마는 Theme 타입을 갖는 객체로 구현.
    - [ ]  Theme의 property에는 rootBg, containerBg, primary, primaryDark, text, textInset, error로 구성. 추후에 변경될 수도 있음
    - [ ]  Theme는 ThemeProvider이라는 객체의 property로 저장, ThemeId라는 enum으로 접근 및 불러오기가 가능하도록 구현
- [ ]  Input 컴포넌트 구현
    - [ ]  disabled Props에 따라 Input 비활성화 여부 결정, UI에서도 비활성화
    - [ ]  invalid Props에 따라 Input의 값이 잘못되었음을 알 수 있도록 하기
    - [ ]  size Prop에 따라 Input의 size가 다르게 보여지도록 구현
- [ ]  Image 컴포넌트 구현
    - [ ]  ratio Props에 따라 이미지 비율을 설정할 수 있도록. (ex. value가 number로 16/9로 넘겨진 경우 16:9로 보여지도록. square을 넘겨준 경우 정사각형)
    - [ ]  radius Props에 따라 border-radius 설정
    - [ ]  Img element의 기본 속성을 모두 사용할 수 있도록 구현
- [ ]  GoodsItem 컴포넌트 구현
    - [ ]  Default/Ranking 컴포넌트를 각각 구현
    - [ ]  공통으로 imageSrc, subtitle, title, amount Props를 받도록 함.
    - [ ]  Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받음. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보이도록.
- [ ]  Grid, Container 컴포넌트 구현
    - [ ]  Grid, Container 모두 child Props로 ReactElement | undefined을 받을 수 있도록 구현
    - [ ]  Grid의 경우 rows columns Props로 rows/columns를 동적으로 설정할 수 있도록 구현
