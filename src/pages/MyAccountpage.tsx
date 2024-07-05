import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/components/common/AuthContext';

const MyAccoutpage: React.FC = () => {
  const navigate = useNavigate();
  const { authToken, setAuthToken } = useAuth();

  const handleLogout = () => {
    setAuthToken(null);
    navigate('/');
  };
  return (
    <div>
      <h2>{authToken} 님 반가워요!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MyAccoutpage;
