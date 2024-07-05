
import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Header from '@/components/Header/Header';

import Home from '../pages/Home';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import Theme from '../pages/Theme';

const AppRoutes = () => {

  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setuser] = useState('');

  const handleLogin = (username:string) => {
    setuser(username);
    setIsLoggedIn(true);
    console.log(`User ${username} logged in`);
  };
  return (
    <Router>
	  <Header isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theme/:themeKey" element={<Theme />} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/my-account" element={<MyAccount username={user}/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
