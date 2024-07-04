import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [filter1, setFilter1] = useState('전체');
  const [filter2, setFilter2] = useState('받고 싶어한');
  const [visibleItems, setVisibleItems] = useState(6);
  const navigate = useNavigate();

  // Theme 페이지로 이동하는 함수
  const handleThemeClick = (themeKey: string) => {
    navigate(`/theme/${themeKey}`);
  };

  // 더보기 버튼 클릭 시 아이템을 6개 더 보여주는 함수
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  // 접기 버튼 클릭 시 처음 6개의 아이템만 보여주는 함수
  const handleShowLess = () => {
    setVisibleItems(6);
  };

  // 예시 아이템 목록 (실제 데이터로 대체 필요)
  const items = Array.from({ length: 20 }, (_, index) => `Gift ${index + 1}`);

  return (
    <div>
      <main>
        {/* Theme 카테고리 섹션 */}
        <section>
          <h2>Theme Categories</h2>
          <ul>
            <li>
              <button onClick={() => handleThemeClick('theme1')}>Theme 1</button>
            </li>
            <li>
              <button onClick={() => handleThemeClick('theme2')}>Theme 2</button>
            </li>
            {/* 필요한 추가 테마 버튼들 */}
            <li>
              <button onClick={() => handleThemeClick('theme3')}>Theme 3</button>
            </li>
            <li>
              <button onClick={() => handleThemeClick('theme4')}>Theme 4</button>
            </li>
          </ul>
        </section>

        {/* 실시간 급상승 선물랭킹 섹션 */}
        <section>
          <h2>Trending Gifts</h2>
          <div>
            <label>Filter by:</label>
            <select value={filter1} onChange={(e) => setFilter1(e.target.value)}>
              <option value="전체">전체</option>
              <option value="여성">여성</option>
              <option value="남성">남성</option>
              <option value="청소년">청소년</option>
            </select>
            <select value={filter2} onChange={(e) => setFilter2(e.target.value)}>
              <option value="받고 싶어한">받고 싶어한</option>
              <option value="많이 선물한">많이 선물한</option>
              <option value="위시로 받은">위시로 받은</option>
            </select>
          </div>
          <ul>
            {items.slice(0, visibleItems).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {visibleItems < items.length ? (
            <button onClick={handleLoadMore}>더보기</button>
          ) : (
            <button onClick={handleShowLess}>접기</button>
          )}
        </section>
      </main>
    </div>
  );
};

export default MainPage;
