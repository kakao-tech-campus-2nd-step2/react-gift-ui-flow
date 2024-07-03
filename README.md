# React Gift UI Flow

## 개요
이 저장소는 FE 카카오 선물하기 2주차 과제 (2024-07-01 ~ 2024-07-05)를 위한 React 기초 구현을 포함하고 있습니다. 학습 일지는 [여기](https://www.notion.so/TIL-FE-25dbeb894e884b889eca0fa3e4e13904)에서 확인할 수 있습니다.

## 페이지 구현 - Routing, 로그인 (without API)

### 1단계 - 페이지 만들기 (without API)

#### 공통 컴포넌트 생성
- [ ] **Header와 Footer를 만들어 모든 페이지에서 적용**

#### 각 Url Path별로 페이지 생성

1. **메인 페이지 (/)**
   - [ ] Theme 카테고리 섹션 추가
   - [ ] Theme 카테고리 Item 클릭 시 Theme 페이지(/theme/:themeKey)로 이동
   - [ ] 실시간 급상승 선물랭킹 추가
   - [ ] 필터 기능을 hooks를 사용하여 구현 (ex. 전체, 여성이, 남성이, 청소년이 / 받고 싶어한, 많이 선물한, 위시로 받은)
   - [ ] 상품 목록을 처음에는 6개만 보여지게 하고, 더보기/접기 버튼 기능 구현

2. **Theme 페이지 (/theme/:themeKey)**
   - [ ] Header 섹션 추가
     - [ ] themeKey에 따라 label, title, description, backgroundColor가 달라지는 재사용성 고려
   - [ ] 상품 목록 섹션 추가

3. **로그인 페이지 (/login)**
   - [ ] ID와 PW 입력 시 로그인 기능 구현 (ID와 PW는 아무 값이나 입력해도 통과)

4. **나의 페이지 (/my-account)**
   - [ ] 로그아웃 버튼 추가
