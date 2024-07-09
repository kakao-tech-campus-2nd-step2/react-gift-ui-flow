import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import { AuthProvider} from '@/contexts/Authcontext';

import Home from '../pages/Home';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import Theme from '../pages/Theme';

const AppRoutes = () => {

  return (
  <AuthProvider>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theme/:themeKey" element={<Theme />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-account" element={<PrivateRoute><MyAccount /></PrivateRoute>} />
        </Routes>
      <Footer />
    </Router>
  </AuthProvider>
  );
}

export default AppRoutes;
