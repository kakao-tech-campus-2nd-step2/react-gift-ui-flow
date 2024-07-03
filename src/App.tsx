import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from "./Footer";
import Header from "./Header";
import LoginPage from './LoginPage/LoginPage';
import Main from "./MainPage/Main";
import ThemePage from "./ThemePage/Theme";

const App: React.FC = () => {
  //const name = 'Josh Perez';

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/theme/:themeKey" Component={ThemePage} />
        <Route path="/login" Component={LoginPage} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
