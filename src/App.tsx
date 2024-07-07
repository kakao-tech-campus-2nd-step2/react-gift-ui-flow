import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { AuthProvider } from '@/context/AuthContext';
import Login from '@/pages/Login';
import Main from '@/pages/Main';
import MyAccount from '@/pages/MyAccount';
import Theme from '@/pages/Theme';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <main style={{ paddingTop: '54px' }}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/theme/:themeKey" element={<Theme />} />
              <Route path="/login" element={<Login />} />
              <Route path="/my-account" element={<MyAccount />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
