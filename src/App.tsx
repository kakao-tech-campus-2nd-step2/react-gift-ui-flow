import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Loginpage from './pages/Loginpage';
import Mainpage from './pages/Mainpage';
import MyAccoutpage from './pages/MyAccountpage';
import Themepage from './pages/Themepage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/theme/:themeKey" element={<Themepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/my-account" element={<MyAccoutpage />} />
        </Routes>
      </Content>
      <Footer />
    </Router>
  );
};

export default App;

const Content = styled.div`
  padding: 20px;
`;
