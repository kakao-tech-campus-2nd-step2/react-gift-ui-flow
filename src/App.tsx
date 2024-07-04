import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ThemePage from './pages/ThemePage';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/theme/:themeKey" element={<ThemePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
