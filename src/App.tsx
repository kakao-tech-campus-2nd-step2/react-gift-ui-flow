import { css } from '@emotion/css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';

const App = () => {
    return (
        <div>
            <Header />
            <div
                className={css`
                    height: 54px;
                `}
            />
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
]);

export default App;
