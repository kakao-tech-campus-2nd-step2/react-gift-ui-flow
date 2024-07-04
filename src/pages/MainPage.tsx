import { useHistory } from 'react-router-dom';

const MainPage: React.FC = () => {
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
      </main>
    </div>
  );
};

export default MainPage;
