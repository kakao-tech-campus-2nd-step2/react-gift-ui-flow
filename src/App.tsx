import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ThemePage from "./ThemePage";

const App: React.FC = () => {
  //const name = 'Josh Perez';

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/theme/:themeKey" Component={ThemePage} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
