import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/main/MainPage';
import Paths from '@constants/Paths';

const router = createBrowserRouter([
  {
    path: Paths.MAIN_PAGE,
    element: <MainPage />,
  },
]);

export default router;
