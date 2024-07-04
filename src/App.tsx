import MainRoutes from './pages/routes';
import { AuthProvider } from './state/login';

const App = () => {
  return (
    <AuthProvider>
      <MainRoutes />
    </AuthProvider>
  );
};

export default App;
