import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import RoutesPage from './router/Router';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <RoutesPage />
      </Router>
    </AuthProvider>
  );
};

export default App;
