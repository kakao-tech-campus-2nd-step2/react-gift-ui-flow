import { AuthProvider } from '@/App-core/AuthContext';
import { AppRoutes } from '@/App-core/Routes';

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
