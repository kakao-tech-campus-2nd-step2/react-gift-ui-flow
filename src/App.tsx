import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Footer from './components/Footer';
import Error from './pages/Error';
import Login from './pages/Login';
import Main from './pages/Main';
import Theme from './pages/Theme';

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
            <Footer />
        </div>
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
        path: '/error/:http_status',
        element: <Error />,
    },
    {
        path: '/theme/:themeKey',
        element: <Theme />,
    },
]);

export default App;
