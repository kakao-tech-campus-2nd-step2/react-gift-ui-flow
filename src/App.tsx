import { RouterProvider } from 'react-router-dom';
import RouterInfo from '@/routes/RouterInfo';

const App = () => {
  return <RouterProvider router={RouterInfo} />;
};

export default App;
