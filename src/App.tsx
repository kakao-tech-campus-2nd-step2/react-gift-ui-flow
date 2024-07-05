import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CategoryPage from './CategoryPage';
import Footer from './components/common/Footer'; // Footer 컴포넌트를 import 합니다.
import Header from './components/common/Header';
import Home from './Home';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header /> {/* 모든 페이지에서 공통으로 보여지는 Header */}
        <Content>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/theme/:themeKey' element={<CategoryPage />} />
          </Routes>
        </Content>
        <Footer /> {/* 모든 페이지에서 공통으로 보여지는 Footer */}
      </AppContainer>
    </Router>
  );
};

export default App;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Content = styled.div`
  padding-bottom: 60px; /* Footer 공간 확보 */
`;
