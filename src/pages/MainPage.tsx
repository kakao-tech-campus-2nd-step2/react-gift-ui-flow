import { useHistory } from 'react-router-dom';

const MainPage: React.FC = () => {
  const [filter1, setFilter1] = useState('전체');
  const history = useHistory();

  const handleThemeClick = (themeKey: string) => {
    history.push(`/theme/${themeKey}`);
  };

  return (
    <div>
      <Header themeKey="default" />
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
          </div>
          <ul>
            <li>Gift 1</li>
            <li>Gift 2</li>
            <li>Gift 3</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
