import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './AuthContext';
import MainPage from './page/MainPage';
import ThemePage from './page/ThemePage';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/theme/:themeKey" element={<ThemePage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
