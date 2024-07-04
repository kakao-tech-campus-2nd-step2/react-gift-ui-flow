import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RoutesPage from './router/Router';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <RoutesPage isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    </Router>
  );
};

export default App;
