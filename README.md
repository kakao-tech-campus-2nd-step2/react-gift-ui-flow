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
