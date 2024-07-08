# 빌드 도구 비교와 tsc, Polyfill

## TypeScript 컴파일러

: TypeScript 코드를 JavaScript 코드로 변환하는 트랜스파일러

- 타입 검사
  - 정적 타입 시스템으로 코드 작성시 타입 오류 감지
- tsconfig.json
  - 프로젝트의 컴파일 옵션 설정이 가능한 파일

## 빌드 도구 비교

### Babel

: 최신 JavaScript 코드를 구버전 JavaScript로 변환하는 트랜스파일러

- ES6 문법을 이전 버전의 JavaScript 코드로 변환해 구형 브라우저에서도 동작하게 함
- ECMAScript 기능을 플러그인으로 사용 가능

### Webpack

- JavaScript 파일 번들링 + CSS, 이미지, 폰트 등 최적화
- 가장 안정적인 번들러
  - 각 모듈을 함수로 감싼 후 번들 생성
  - 전역 스코프 변수를 지역 변수로 변경해 충돌 없음
- JavsScript가 아닌 파일은 인식 못함
- CRA에서 기본적으로 사용

### ESBuild

- 매우 빠른 JavaScript 번들러 + 트랜스파일러
- 속도와 효율성 중시
- Go 언어로 작성되어 매우 빠름
  - 컴파일 단계에서 소스 코드를 기계어로 변환
  - 멀티 스레드
- 트랜스파일링 지원
  - 최신 JavaScript 문법을 구버전 브라우저에서 사용 가능
- TypeScript의 타입 체킹 미지원

### Create React App(CRA)

- 추가 설정이 필요 없는 React 세팅 도구
- 기본적으로 레거시 브라우저 지원을 고려함
  - Babel로 자동으로 polyfill 포함
- Webpack을 사용해 번들링
- Babel을 사용해 트랜스파일링

### Vite

- 개발 서버 + 통합 번들러
  - 다른 번들 도구에서 제공하는 기능을 모두 하나로 합침
- Native ESM 사용
  - Native ESM: JavaScript 런타임 환경에서 지원하는 모듈 시스템
  - 브라우저가 지원하는 ESM을 사용해 개발 서버를 실행
  - 개발 중 사용하는 모듈만 빌드해 브라우저에게 전달 후 브라우저가 모듈을 직접 로드, 실행
- ESBuild, Rollup을 사용해 빠르게, 효율적으로 번들링
- ESBuild를 사용해 트랜스파일링
- HMR, SSR, CSS 핫 리로딩, 환경 변수 관리 등 다양한 기능 제공

## Polyfill

: 최신 웹 기술이 제공하는 기능을 구형 브라우저에서도 사용할 수 있도록 해주는 코드

- 하위 브라우저가 지원하는 JavaScript 코드로 최신 JavaScript 기능을 구현하는 방식
- JavaScript 버전별, 브라우저별로 지원하는 기능이 다름 → 코드가 모든 브라우저에서 작동하도록 polyfill 설정 필요

### 사용 방법

- 직접 코드 추가
- 라이브러리 사용: core-js
- 빌드 도구 사용: Babel
