import { AuthProvider } from '@/context/AuthContext';
import Router from '@/routes/Router';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
