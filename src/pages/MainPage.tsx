import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@/components/common/layouts/Grid';
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
          <Grid columns={{ sm: 4, md: 5, lg: 6 }} gap={20}>
            {Object.keys(themeConfig).map((key) => (
              <div key={key}>
                <button onClick={() => handleThemeClick(key)}>{themeConfig[key].label}</button>
              </div>
            ))}
          </Grid>
        </section>
        <section>
          <h2>실시간 급상승 선물랭킹</h2>
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
          <Grid columns={{ sm: 4, md: 5, lg: 6 }} gap={20}>
            {items.slice(0, visibleItems).map((item) => (
              <div key={item}>{item}</div>
            ))}
          </Grid>
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
