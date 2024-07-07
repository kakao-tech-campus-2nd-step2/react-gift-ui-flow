import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer } from '@/components/common/layouts/Footer';
import { Header } from '@/components/common/layouts/Header';
import { AuthProvider } from '@/context/AuthContext';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { MyAccount } from '@/pages/MyAccount';
import { Theme } from '@/pages/Theme';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-account" element={<MyAccount name="daeun" />} />
            <Route path="/theme/:themeKey" element={<Theme />} />
          </Routes>
          <Footer>카카오톡 선물하기</Footer>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
