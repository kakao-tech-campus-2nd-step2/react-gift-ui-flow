# 카카오 테크 캠퍼스 - 프론트엔드 카카오 선물하기 편

## project structure

이 프로젝트는 카카오 테크 캠퍼스의 프론트엔드 카카오 선물하기 편 프로젝트입니다. 다음은 프로젝트의 주요 디렉토리 및 파일 구조에 대한 설명입니다.

- `src/`: 소스 코드가 위치하는 디렉토리입니다. 주요 하위 디렉토리 및 파일은 다음과 같습니다.
  - `components/`: 재사용 가능한 컴포넌트들이 위치하는 디렉토리입니다.
    - `common/`: 공통 컴포넌트들이 위치하는 디렉토리입니다.
    - `Footer/`, `Header/`: 푸터 및 헤더 컴포넌트가 위치하는 디렉토리입니다.
  - `context/`: 상태 관리 로직이 위치하는 디렉토리입니다.
  - `pages/`: 각 페이지 컴포넌트들이 위치하는 디렉토리입니다. 로그인, 메인 페이지 등이 포함됩니다.
  - `styles/`: 전역 스타일 및 CSS 변수가 정의된 파일들이 위치하는 디렉토리입니다.
  - `App.tsx`, `index.tsx`: 애플리케이션의 진입점 및 루트 컴포넌트 파일입니다.

## page

|메인|테마|
|---|---|
|![localhost_3000_](https://github.com/dandamdandam/react-gift-ui-flow/assets/102032954/df2712af-c58d-40ff-99d3-c1d036bac3a0)|![localhost_3000_ (1)](https://github.com/dandamdandam/react-gift-ui-flow/assets/102032954/090a2a21-90a4-4101-a52a-a33235de23ed)|
|로그인|마이페이지|
|![image](https://github.com/dandamdandam/react-gift-ui-flow/assets/102032954/cfaa18c0-04ba-42b2-a6bd-03c4376c3e0f)|![image](https://github.com/dandamdandam/react-gift-ui-flow/assets/102032954/a6ae9247-29cd-4b5d-9a9b-2e9c6374e72a)|

## 과제 3단계

### 질문 1. CRA 기반의 SPA프로젝트에서 React Router를 사용하지 않는다면 어떤 문제가 발생하나요?

- UX적 필요에 따라(1. 사용자는 URL을 통한 페이지 이동에 익숙하다 | 2. 한 페이지에 정보가 너무 많으면 사용하기 불편하기 때문에 페이지는 나누어져 있어야 한다), 브라우저의 페이지 라우팅을 필수 불가결 합니다.
- React Router를 사용하지 않는다면 HISTORY API를 이용해 직접 구현을 해야하는데, 이때 아래와 같은 문제가 발생합니다.
  1. 페이지 전환마다 새로고침이 됨: React의 장점 중 하나는 페이지를 전체 랜더링하지 않고 변화를 적용할 수 있다는 점입니다. 하지만 라우터를 사용하지 않으면, 페이지 전환 시 이 장점을 살릴 수 없게 됩니다.
  2. 코드의 복잡성이 늘어납니다. React router는 useNavigate 호출하나로 페이지 변환이 가능한 반면, history의 경우 페이지 간 이동의 상태를 관리하고, 뒤로 가기/앞으로 가기를 위한 로직을 관리해주어야 합니다.

### 질문 2. 리액트 Context 나 Redux는 언제 사용하면 좋을까요? (로그인을 제외한 예시와 이유를 함께 적어주세요.)

- 페이지 전반에 필요한 설정: 테마 설정, 언어 선택
  - 모든 페이지 컨텐츠에 영향을 미치는 설정의 경우, props로 넘기는 것 보다 전역상태로 관리하는 것이 좋을 것 같습니다.
- props drilling이 일정 이상 넘어간 경우
- 서버에서 불러온 정보 저장
  - 같은 정보를 자주 불러오는 것을 방지하기 위해 전역상태로 저장해두는 경우가 많은 것 같습니다.
  - 이 경우 정보가 변할 경우 다시 가져오기 위해 서버 전역 상태 관리 라이브러리를 씁니다.

### 질문 3. Local Storage, Session Storage 와 Cookies의 차이가 무엇이며 각각 어떨때 사용하면 좋을까요?

- 🍪 Cookie
  - 도메인 단위로 데이터를 저장할 수 있는 장소
  - 일반적으로 최대 20개 및 4KB 제한
  - 영구 저장 X
  - 쿠키 SET: `document.cookie = ‘데이터이름=값’`으로 설정할 수 있다.
    - 추가 옵션
      - domain: 유효 도메인 설정
      - path: 유효 경로 설정
      - expires: 만료 날짜 설정
        - UTC(표준시)로 작성해야 한다!
        - Date.toUTCString() 사용하기.
      - max-age: 만료 타이머 설정
      - ex) `a=1; domain=127.0.0.1; path=/abc; max-age=3;` localhost/abc에서만 유효한 a=1 데이터가 쿠키에 저장되고, 3초 후에 사라진다.
      - ex) `b=2; expires=${new Date(2002, 11, 16).toUTCString()}` b=2 데이터가 쿠키에 저장되고, 날짜가 지나면 사라진다.
  - 쿠키 GET: document.cookie는 저장되어 있는 데이터를 세미콜론으로 나누어 리턴한다.
    - ex) a=1, b=2가 저장되어 있다면, 반환되는 문자열은 `a=1; b=2`
- 🍪 Storage
  - 도메인 단위 저장
  - 5MB 제한 (Cookie보다 훨씬 큼)
  - 세션 혹은 영구 저장 O
    - **sessionStorage**: 브라우저 세션이 유지는 동안 저장
    - **localStorage**: 영구 저장
    - 위 두 객체의 사용 메소드는 같다.
  - 값은 문자열 형태로 저장된다.
  - 스토리지 SET: `localStorage.setItem('데이터이름', 데이터 값)`으로 설정 가능
  - 스토리지 GET: `localStorage.getItem('데이터 이름')`으로 get
  - 스토리지 DEL: `localStorage.removeItem('데이터 이름')` 또는 `localStorage.clear()`

## 🎸

### 과제 수행 일지

- [프로젝트 세팅 및 react-router-dom 추가](https://www.notion.so/Day-8-17d5af7315af4ad8a9b5dd72da8d52b8?pvs=4#f4809a6fe3bf4546be35fb7c72513dbf)
- [메인페이지 테마섹션 구현, 실시간 급상승 선물랭킹 구상](https://www.notion.so/Day-9-4ab00c0835fd4171b27ba7e21a3e81d1?pvs=4#ed06422429ae481487a706b9cbbe26b6)
- [나머지 페이지(theme, 로그인, 마이페이지) 구현](https://www.notion.so/Day-10-f35d03c898934bff9edbf4f150db8104?pvs=4#2be7062e72e543b89d5803e6aa13bb44`)

### 궁금한 점

- 같이 편집되는 빈도 수가 높은 것 끼리 묶으려 하니까 컴포넌트를 page에 두어야 할지 component에 두어야 할지 판단이 잘 서지 않습니다.
  - 전역적으로 사용되는 component만 component에 넣으면 되는 걸까요?
  - RankingView같은 경우에는 타입선언 파일마저 한 폴더에 넣었는데, 많이 낮선구조로 보이나요..?
- 스타일을 지정할 때 flex에 많이 의존하는 편인데, 성능저하가 되거나 코드의 가독성이 떨이지는 등의 문제는 없을까요?
- ~~authToken의 경우 로그인확인을 할 때 sessionStorage.getItem을 직접 호출해서 하는 것도 문제가 없고 오히려 더 간단한데, 왜 ContextAPI를 쓸까? (어떤 점에서 이점이 있는지 찾아보기~!)~~
