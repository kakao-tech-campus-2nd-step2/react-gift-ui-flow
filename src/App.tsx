import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from '@/contexts/AuthContext';

import { router } from './Router';

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
