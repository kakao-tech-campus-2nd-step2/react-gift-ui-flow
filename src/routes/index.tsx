
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Header from '@/components/Header/Header';

import Home from '../pages/Home';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import Theme from '../pages/Theme';

const AppRoutes = () => {
  return (
    <Router>
	  <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theme/:themeKey" element={<Theme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
