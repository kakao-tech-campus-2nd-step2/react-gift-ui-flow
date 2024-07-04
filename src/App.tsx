/* eslint-disable simple-import-sort/imports */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/common/Header/header';
import { Footer } from '@/components/common/Footer/footer';
import { Main } from '@/components/Main/main';
// import { Theme } from '@/components/Theme/theme';
// import { Login } from '@/components/Login/login';
// import { Mypage } from '@/components/Mypage/mypage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/theme/:themeKey" element={<Theme />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/my-account" element={<Mypage />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
