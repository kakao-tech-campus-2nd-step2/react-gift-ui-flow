import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './components/common/Login/AuthContext';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Mypage from './pages/MyPage';
import ThemePage from './pages/ThemePage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
