# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

### 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

#### Requirements
- [x] 1주차 Style 부분 코드리뷰 반영
    - [x] Components 안에 있는 App.tsx 옮기기
    - [x] css module 대신 emotion 스타일 라이브러리를 tsx에 추가
    - [x] 컴포넌트 별로 폴더 구조 변경
    - [x] 통일성을 위해 style 코드의 storybook이라는 prefix 사용한 부분 제거
- [x] 불필요한 stories 폴더 전체 제거
- [x] rankingIndex의 여부로 isRanking을 대체
- [x] 재할당 가능한 let을 대신하는 themeStyle 객체 및 스타일 수정
- [x] theme별 primary/secondary 스타일 추가
- [x] 예측가능성을 고려한 label -> children 변경
- [x] 통일성과 올바른 기능 작동을 위한 Grid style 코드 수정
- [x] ratio 완벽하게 처리하는 로직 개선
- [x] radius 완벽하게 처리하는 로직 개선
- [x] button tag의 모든 prop을 받을 수 있도록 extends로 타입을 확장 및 Omit 활용