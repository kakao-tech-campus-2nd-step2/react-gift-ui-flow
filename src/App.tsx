import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components/common/Header/Header';
import MainPage from './pages/Main/MainPage';
import ThemePage from './pages/Theme/ThemePage';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/theme/:themeKey" element={<ThemePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
