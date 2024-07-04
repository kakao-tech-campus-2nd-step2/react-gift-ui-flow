import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import Main from './pages/main/Main';
import LifeSmallGift from './pages/theme/Theme';
import Login from './pages/user/Login';
import MyAccount from './pages/user/MyAccount';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/my-account" element={<MyAccount />} />
            </Route>
            <Route path="/theme/life_small_gift" element={<LifeSmallGift />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
