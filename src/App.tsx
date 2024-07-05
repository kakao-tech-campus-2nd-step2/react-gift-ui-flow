import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Footer from './components/Footer';
import AuthContext from './context/AuthContext';
import Error from './pages/Error';
import Login from './pages/Login';
import Main from './pages/Main';
import MyAccount from './pages/MyAccount';
import Theme from './pages/Theme';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    useEffect(() => {
        const authToken = sessionStorage.getItem('authToken');
        setIsAuthenticated(!!authToken);
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <RouterProvider router={router} />
            <Footer />
        </AuthContext.Provider>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/my-account',
        element: <MyAccount />,
    },
    {
        path: '/error/:http_status',
        element: <Error />,
    },
    {
        path: '/theme/:themeKey',
        element: <Theme />,
    },
]);

export default App;
