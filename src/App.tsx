import { RouterProvider } from 'react-router-dom';
import RouterInfo from '@/routes/RouterInfo';
import { AuthProvider } from '@/providers/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={RouterInfo} />
    </AuthProvider>
  );
};

export default App;
