# React Gift UI Flow

## 개요
이 저장소는 FE 카카오 선물하기 2주차 과제 (2024-07-01 ~ 2024-07-05)를 위한 React 페이지 구현을 포함하고 있습니다. 학습 일지는 [여기](https://www.notion.so/TIL-FE-25dbeb894e884b889eca0fa3e4e13904)에서 확인할 수 있습니다.

지난주에 진행한 레퍼지토리도 있지만 ([react-gift-react-foundation](https://github.com/sugoring/react-gift-react-foundation)), 기반을 잡아놓은 프로젝트에서 실행하는 방법도 익혀보고 싶어 해당 레퍼지토리([react-gift-ui-flow](https://github.com/kakao-tech-campus-2nd-step2/react-gift-ui-flow))를 클론하여 시작하였습니다.

## 페이지 구현 - Routing, 로그인 (without API)

### 1단계 - 페이지 만들기 (without API)

#### 공통 컴포넌트 생성
- **Header 컴포넌트 생성**
  - [x] Header 컴포넌트 파일 생성
  - [x] Header 컴포넌트 기본 구조 작성
    - [x] themeKey에 따라 label 변경 로직 추가
    - [x] themeKey에 따라 title 변경 로직 추가
    - [x] themeKey에 따라 description 변경 로직 추가
    - [x] themeKey에 따라 backgroundColor 변경 로직 추가
  - [x] Header 컴포넌트를 모든 페이지에 적용

- **Footer 컴포넌트 생성**
  - [x] Footer 컴포넌트 파일 생성
  - [ ] Footer 컴포넌트 기본 구조 작성
  - [x] Footer 컴포넌트를 모든 페이지에 적용

#### pages

1. **MainPage (/)**
   - [x] MainPage 파일 생성
   - [ ] Theme 카테고리 섹션 추가
     - [ ] Theme 카테고리 섹션 기본 구조 작성
     - [ ] Theme 카테고리 Item 클릭 시 Theme 페이지(/theme/:themeKey)로 이동 로직 추가
   - [ ] 실시간 급상승 선물랭킹 추가
     - [ ] 실시간 급상승 선물랭킹 기본 구조 작성
     - [ ] 필터 기능을 hooks를 사용하여 구현
       - [ ] 필터1: 전체, 여성이, 남성이, 청소년이
       - [ ] 필터2: 받고 싶어한, 많이 선물한, 위시로 받은
   - [ ] 상품 목록을 보여줌
     - [ ] 처음에는 6개만 보여짐
     - [ ] 더보기 버튼 기능 구현
     - [ ] 접기 버튼 기능 구현

2. **ThemePage (/theme/:themeKey)**
   - [x] ThemePage 파일 생성
   - [ ] Header 섹션의 themeKey에 따른 내용 변경 확인
   - [ ] 상품 목록 섹션 추가
     - [ ] 상품 목록 기본 구조 작성

3. **LoginPage (/login)**
   - [x] LoginPage 파일 생성
   - [ ] ID와 PW 입력 폼 생성
   - [ ] 로그인 버튼 생성
   - [ ] 로그인 버튼 클릭 시 로그인 처리 로직 추가 (현재는 ID와 PW는 아무 값이나 입력해도 통과)

4. **MyAccountPage (/my-account)**
   - [x] MyAccountPage 파일 생성
   - [ ] 로그아웃 버튼 추가
   - [ ] 로그아웃 버튼 클릭 시 로그아웃 처리 로직 추가

