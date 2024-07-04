import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// import MyAccount from './Pages/MyAccount';
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Theme from './Pages/Theme';
import { ROUTE_PATHS } from './router/paths';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route
        path={ROUTE_PATHS.ROOT}
        element={<Layout isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      >
        <Route index element={<Home />} />
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
        <Route path={ROUTE_PATHS.THEME} element={<Theme />} />
        {/* <Route path={ROUTE_PATHS.MYPAGE} element={<MyAccount />} /> */}
        <Route path={ROUTE_PATHS.LOGIN} element={<Login onLogin={handleLogin} />} />
      </Route>
    </Routes>
  );
};

export default App;
