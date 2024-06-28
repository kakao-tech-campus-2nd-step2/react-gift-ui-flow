# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

### 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현

#### Requirements
- [x] Storybook 추가<br>
공통 컴포넌트에 아래와 같은 컴포넌트를 구현하고, Storybook에서 확인 할 수 있도록 구현
  - Button 컴포넌트 구현
    - [x] Theme Props에 따라 버튼의 컬러와 디자인이 변경되도록 구현
    - [x] Size Props에 따라 버튼의 size가 변경되도록 구현
    - [x] Size Props 예외 - value가 responsive인 경우 미디어 쿼리에 따라 사이즈가 변경되도록 구현
    - [x] Button element의 기본 속성을 모두 사용 가능하도록 구현

  - Input 컴포넌트 구현
    - [x] disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지 가능하도록 구현
    - [x] invalid Props 에 따라 Input의 값이 잘 못되었음을 UI에서 인지 가능하도록 구현
    - [x] Size Props에 따라 버튼의 size가 변경되도록 구현
    - [x] Size Props 예외 - value가 responsive인 경우 미디어 쿼리에 따라 사이즈가 변경되도록 구현
    - [x] Input Element의 기본 속성들을 모두 사용 가능하도록 구현

  - Image 컴포넌트 구현
    - [ ] ratio Props에 따라 이미지 비율을 설정 - value가 number로 16/9로 넘겨진 경우
    - [ ] ratio Props에 따라 이미지 비율을 설정 - value가 square로 설정한 경우
    - [ ] radius Props에 따라 모서리가 둥글게 구현 - value가 number인 경우
    - [ ] radius Props에 따라 모서리가 둥글게 구현 - value가 number인 경우
    - [x] Img Element의 기본 속성들을 모두 사용 가능하도록 구현

  - GoodsItem 컴포넌트 구현
    - [ ] Default 형태의 컴포넌트 구현
    - [ ] Ranking 형태의 컴포넌트 구현
    - [ ] 공통 Props: imageSrc, subtitle, title, amount 넘겨받도록 구현
    - 랭킹 형태의 경우 rankingIndex Props를 받도록 구현
      - [ ] rankingIndex가 1~3이면 분홍색 랭킹 배지가 보이도록 구현
      - [ ] rankingIndex가 1~3이 아니면 회색 랭킹 배지가 보이도록 구현

  - [ ] Grid, Container 컴포넌트 구현