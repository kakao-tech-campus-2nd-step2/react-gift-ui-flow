import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/MainPage';
import ThemePage from './pages/ThemePage';
import LoginPage from './pages/LoginPage';
import PATH from './components/constants';
import MyPage from './pages/MyPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.MAINPAGE} element={<Mainpage />} />
        <Route path={PATH.THEMEPAGE} element={<ThemePage />} />
        <Route path={PATH.LOGINPAGE} element={<LoginPage />} />
        <Route path={PATH.MYPAGE} element={<MyPage />} />

        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
