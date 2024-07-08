import './MyPage.css';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const MyPage: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  //로그인이 되어있지 않은 경우
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="my-page">
      <p>{sessionStorage.getItem('authToken')}님 안녕하세요!</p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default MyPage;
