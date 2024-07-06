import '@/App.css';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

// import React from 'react';
import GiftRanking from '@/components/common/main/GiftRanking';
import ThemeCategory from '@/components/common/main/ThemeCategory';
import { IsLoginProvider } from '@/components/contextAPI/IsLoginContext';
import Layout from '@/components/Layout/Layout';
import Login from '@/pages/login/Login';
import MyPage from '@/pages/myPage/MyPage';
import Theme from '@/pages/theme/Theme';

const App = () => {

  return (
    <IsLoginProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/theme/:themeKey' element={<Theme />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/my-account' element={<MyPage />}/>
          </Routes>
        </Layout>
      </Router>
    </IsLoginProvider>
  );
};

function Home() {
  return(
    <div>
      <ThemeCategory/>
      <GiftRanking/>
    </div>
  );
};

export default App;


