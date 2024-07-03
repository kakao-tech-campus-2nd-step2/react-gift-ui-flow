import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import MyAccount from '@pages/MyAccount';
import Theme from '@pages/Theme';
import { Route, Routes } from 'react-router-dom';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/theme/:themeKey" element={<Theme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
