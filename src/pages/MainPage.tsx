import React, { useState } from 'react';
const MainPage: React.FC = () => {
  const [filter1, setFilter1] = useState('전체');
  const [filter2, setFilter2] = useState('받고 싶어한');
  const history = useHistory();

  const handleThemeClick = (themeKey: string) => {
    history.push(`/theme/${themeKey}`);
  };

  return (
    <div>
      <main>
        <section>
          <h2>Theme Categories</h2>
          <ul>
            <li>
              <button onClick={() => handleThemeClick('theme1')}>Theme 1</button>
            </li>
            <li>
              <button onClick={() => handleThemeClick('theme2')}>Theme 2</button>
            </li>
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
            <li>Gift 1</li>
            <li>Gift 2</li>
            <li>Gift 3</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
