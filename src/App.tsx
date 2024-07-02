import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';
import MyaccountPage from './page/MyaccountPage';
import ThemePage from './page/ThemePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/theme/:themeKey" element={<ThemePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-account" element={<MyaccountPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
