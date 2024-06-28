# react-gift-react-foundation

## FE 카카오 선물하기 1주차 과제: React 기초

1. create-react-app 으로 프로젝트 생성 및 typescript로 동작되도록 세팅
2. tsconfig 설정
3. ESLint, Prettier 설정
4. emotion reset css 적용
5. gitignore 추가
6. 불필요한 코드 및 파일 제거
7. 폴더 생성

## 폴더 구조 설명

```bash
.root
├── node_modules
├── public
├── src
│   ├── assets          // 이미지, 폰트 등 미디어 파일
│   ├── components      // 주요 컴포넌트
│   ├── hooks           // 커스텀 훅
│   ├── pages           // 페이지 컴포넌트
│   ├── services        // api
│   ├── store           // 상태관리
│   ├── styles          // css
│   └── utils           // 공통함수, 상수 등
└──
```

## 3단계 과제

질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요? -여러 개의 파일을 하나의 파일로 합쳐주는 번들러입니다. 여기서 번들러란 코드, 프로그램을 묶어서 패키지로 제공하는 것입니다. 하나의 시작점(index.js 등)으로부터 의존성을 가지는 모듈을 추적하여 하나의 결과물을 만들어내는 모듈 번들러 역할을 합니다.

질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요? -바벨과 같은 컴파일러를 이용하여 JSX를 자바스크립트 객체로 변환하면 읽을 수 있습니다.

질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요? -상태 정보를 가진 객체의 주소값이 변경되면 알 수 있습니다!
