import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { themeConfig } from '@/components/themeConfig';

const MainPage = () => {
  const [filter1, setFilter1] = useState('전체');
  const [filter2, setFilter2] = useState('받고 싶어한');
  const [visibleItems, setVisibleItems] = useState(6);
  const navigate = useNavigate();

  const handleThemeClick = (themeKey: string) => {
    navigate(`/theme/${themeKey}`);
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const handleShowLess = () => {
    setVisibleItems(6);
  };

  const items = Array.from({ length: 20 }, (_, index) => `Gift ${index + 1}`);

  return (
    <div>
      <main>
        <section>
          <h2>Theme Categories</h2>
          <ul>
            {Object.keys(themeConfig).map((key) => (
              <li key={key}>
                <button onClick={() => handleThemeClick(key)}>{themeConfig[key].label}</button>
              </li>
            ))}
          </ul>
        </section>
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
