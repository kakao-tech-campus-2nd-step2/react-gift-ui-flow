# FE 카카오 선물하기 2주차 과제

<h1>📄1단계 과제 - 페이지 만들기</h1>
<h3>1️⃣ Common</h3>
<p>Header 컴포넌트 생성</p>
<p>Footer 컴포넌트 생성</p>
(모든 페이지에서 Header와 Footer는 보여질 수 있게 적용)<br>
<h3>2️⃣ 메인 페이지 (/)</h3>
<p>친구 선택 컴포넌트 구현 (section1) </p>
<p>Theme 카테고리 구현 (section2) </p>
<p>ThemeItem 컴포넌트 구현 (section2)</p>
<p>추천 배너 구현 (section3) </p>

<p>Ranking 컴포넌트 구현 (section4) </p>
<p>- 필터 1(전체,여성,남성,청소년)</p>
<p>- 필터 2(받고 싶어한, 많이 선물한...)</p>
<p>- 상품 목록 더보기 구현</p>

<h3>3️⃣ Theme 페이지 (/theme/:themeKey)</h3>
<p>Theme 페이지 헤더 (재사용성을 고려)</p>
<p>상품 목록 섹션 추가</p>

<h3>4️⃣ 로그인 페이지 (/login)</h3>
<p>ID와 PW 입력하면 로그인이 되도록</p>

<h3>5️⃣ 나의 페이지(/my-account)</h3>
<p>로그아웃 버튼 추가</p><br>

<h1>🔒2단계 과제 - 인증 프로세스 구현</h1>
<b>[Fake 로그인 기능을 구현]</b>
<p>로그인 페이지에서 ID와 PW를 입력하면 ID를 sessionStorage의 authToken key에 저장</p>
<p>모든 페이지 진입 시 authToken을 토대로 로그인 여부를 판단하는 로직을 추가 (ContextAPI 활용)</p>
<p>Header에서 로그인 한 경우 내 계정을 로그인 하지 않은 경우 로그인 버튼을 추가</p>
<p>내 계정(/my-account) 페이지는 로그인 한 사람만 접근 가능 (로그인 하지 않은 유저는 로그인 페이지로 연결)</p>
<p>내 계정 페이지에서 로그아웃을 할 수 있도록 구현 (로그아웃 후 메인 페이지(/) 로 Redirect 되도록) </p>
