import {createBrowserRouter, Route, Routes} from "react-router-dom"
import App from '@/App';
import MainPage from './MainPage';
import ThemePage from './ThemePage';
import LoginPage from './LoginPage';
import MyAccountPage from './MyAccountPage';

const router = createBrowserRouter([
  {
    path:"/", //path 지정
    element: <Root />, //Root element를 Render
    children: [
      {
        path:"",
        element: <Home />,
      },
      {
        path:"about",
        element: <About />,
      },
    ]
  }
])

export default router;