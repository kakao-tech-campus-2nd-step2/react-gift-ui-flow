import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/main/MainPage';
import Paths from '@constants/Paths';
import ThemePage from '@pages/ThemePage';

const router = createBrowserRouter([
  {
    path: Paths.MAIN_PAGE,
    element: <MainPage />,
  },
  {
    path: Paths.THEME_PAGE(':themeKey'),
    element: <ThemePage />,
  },
]);

export default router;
