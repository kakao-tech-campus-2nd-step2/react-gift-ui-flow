## 1주차 [질문](https://kibong.notion.site/db60b098e56e4333ae78e8c44edd09f5)

### 1. reportWebVital?
이번 프로젝트를 세팅하면서 불필요한 파일을 탐색하던중 reportWeVital이라는 것을 알게되었는데요.
찾아보니 웹 성능 측정을 통해서 사용자 경험과 성능 평가를 가능하게 해주는 도구임을 알게되었습니다.
초기 React프로젝트를 reportWebVitals로 console로 간단하게 찍어보니 console탭에서 성능에 대한 결과를 객체 형태로 확인할 수 있었습니다.
결과로 FCP, TTFB, LCP, FID, CLS와 같이 다양한 방면으로 성능 측정이 가능하다는 것을 확인할 수 있었습니다.
이러한 웹 성능 측정을 회사에서 실제로 많이 고민하고 코드를 짜는지 궁금하고, 한번도 이런 성능 측정을 해본 경험이 없기에 이 부분에 대해서 더 자세히 알려면 어떤식으로, 어떻게 공부하고 경험할 수 있는지 궁금합니다.

### 2. 절대경로 ESLint 에러 이슈 어떻게 해결해야할까요?
<img width="606" alt="스크린샷 2024-06-26 오후 5 44 42" src="https://github.com/kang-kibong/kang-kibong/assets/33623123/2acbd044-1698-4ffe-bc1b-bc4e0b9c2ae3">

ESLint가 `@components/Button.tsx` 모듈의 경로를 찾지 못하고 있었습니다.
그 이유는 **alias reslover**가 제대로 설정되지 않아 생긴 문제였다고 판단하였습니다.
때문에 두가지의 플러그인인 `eslint-plugin-import`와 `eslint-import-resolver-alias`가 필요하다고 생각되어 설치를 진행했습니다.
설치가 완료된 후 `.eslintrc`에서 **import/resolver/alias** 부분에 각 절대경로에 해당하는 aslias를 따로 지정해주어야 인식할 수 있기에 다음과 같이 작성해보았습니다.

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["react-app", "eslint:recommended", "plugin:import/typescript", "airbnb", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-var": "error",
    "no-multiple-empty-lines": "error",
    "no-console": ["error", { "allow": ["warn", "error", "info"] }],
    "eqeqeq": "error",
    "dot-notation": "error",
    "no-unused-vars": "error",
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "import/extensions": ["error", "ignorePackages"]
  },
  "settings": {
    **"import/resolver": {
      "alias": {
        "map": [
          ["@components", "./src/components"]
        ],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }**
  }
}
```
<img width="391" alt="스크린샷 2024-06-26 오후 5 47 23" src="https://github.com/kang-kibong/kang-kibong/assets/33623123/0af50065-124e-41d0-87e9-0d5302688883">

절대경로를 통해 발생한 ESLint가 사라진 것을 확인할 수 있었지만, 에디터를 닫고 다시 열어보니 같은 이슈가 발생하였습니다.

솔직히 이유를 잘 모르겠습니다.

구글링해본 결과 일단 `rules`에 `"import/no-unresolved": "off”`하면 해결할 수 있다고 하여 작성해놓은 상태입니다.

이 이슈를 해결할 수 있는 방안은 무엇일까요?

### 3. Emotion의 styled 작성은 어떤것을 선호하시나요?

css-in-js인 만큼 자바스크립트 안에 스타일 코드를 작성할 수 있다는 점에서 장점이있다고 생각합니다.

하지만 책임분리를 생각해보면 스타일만 책임을 갖는 파일로 분리하는 것이 좋을지 아니면 컴포넌트 하단에 스타일 코드를 작성해야하는지 궁금합니다.

개인적으로 저는 컴포넌트 코드를 확인하면서 스타일링 작업을 해야되서 위, 아래로 자주 스크롤하는 것이, 생각보다 개발 효율이 안좋아서 책임 분리라는 이유로? 다음과 같이 스타일 코드 파일을 분리하여 작업하고 있습니다.
```json
Button
├── Button.styled.ts
└── Button.tsx
```

보통 어떤식으로 하는지 궁금합니다! 정답이란게 있을까요?

### 4. Emotion의 babel-plugin을 사용하는 이유는 무엇인가요?

스타일을 압축 및 호이스팅하여 최적화하고 souce map및 label로 더나은 개발 경험을 생성하는 플러그인을 원하면 권장한다고 합니다.

해당 내용에 대해서 잘 이해가 가지 않아 고민입니다!

### 5. tailwindcss와 css-in-js에서의 고민

요즘 채용공고를 보면 이전과는 다르게 심심치않게 tailwindcss를 요구하는 회사가 많아지고 있다는 것을 느꼈습니다.

이러한 동향이 발생된 멘토님의 개인적인 이유를 들어보고 싶습니다.

개인적으로 tailwindcss는 inline css와 같이 클래스명 내에서 스타일링할 수 있다는 점에서 유지보수하기 힘들 것 같다는 생각에 평소 css-in-js를 많이 사용하는 것 같습니다.

성능 차이에서일까요? 아니면 편의성때문일까요? 두 라이브러리에 대한 차이에 대해서도 궁금합니다.

### 6. lint-staged, husky 현업에서 많이 사용하고있나요?

eslint와 prettier를 공부하던 중 lint-staged와 huksy에 대해서 알게되었습니다.

이번 과제에서도 적용해보았지만, 이를 고려하면 git hook을 통해 포맷팅와 린팅을 자동화 시킬 수 있다는 점이 장점이라 생각되어 다른 프로젝트에서도 평소 사용하고 있는 편입니다.

현업에서도 많이 쓰이는 기술일까요? 아니면 이것도 필요에 따라 설치하는 편인가요?

### 7. 폴더 구조에는 정답이란게 있을까요?

코드를 작성하다보면 분리를 할 수 있는 상황이 되는데요. 이럴때마다 어떤 폴더로 관리해야되는지 감이 잘 안오는 것 같습니다.

그 이유를 생각해보니 React가 라이브러리라는 특성을 가진 만큼 규격이 딱히 정해져 있지 않다보니 사람마다 천차만별로 관리하는 것 같다고 생각해서인 것 같습니다.

이번 과제에서는 기능에 따라 패턴을 잡아봤습니다.

혹시 정답이란게 있을까요? 혹은 최근 많이 사용되어지고 있는 패턴이 있을까요?