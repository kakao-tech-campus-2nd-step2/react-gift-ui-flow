import '@/App.css';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

// import React from 'react';
import GiftRanking from '@/components/common/main/GiftRanking';
import ThemeCategory from '@/components/common/main/ThemeCategory';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Theme from '@/components/pages/theme/Theme.js';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/theme/:themeKey' element={<Theme />}/>
      </Routes>
    </Router>
  );
};

function Home() {
  return(
    <div>
      <Header/>
      <ThemeCategory/>
      <GiftRanking/>
      <Footer/>
    </div>
  );
};

export default App;


