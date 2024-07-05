import styled from '@emotion/styled';
import { BrowserRouter as Router, Navigate,Route, Routes } from 'react-router-dom';

import CategoryPage from './CategoryPage';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Home from './Home';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <AppContainer>
                    <Header /> {/* 모든 페이지에서 공통으로 보여지는 Header */}
                    <Content>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/theme/:themeKey' element={<CategoryPage />} />
                            <Route path='/my-account' element={<PrivateRoute />}>
                                <Route path='/my-account' element={<MyAccount />} />
                            </Route>
                        </Routes>
                    </Content>
                    <Footer /> {/* 모든 페이지에서 공통으로 보여지는 Footer */}
                </AppContainer>
            </Router>
        </AuthProvider>
    );
};

const PrivateRoute = () => {
    const { authToken } = useAuth();
    return authToken ? <MyAccount /> : <Navigate to="/login" />;
};

export default App;

const AppContainer = styled.div`
    position: relative;
    min-height: 100vh;
`;

const Content = styled.div`
    padding-bottom: 60px; /* Footer 공간 확보 */
`;
