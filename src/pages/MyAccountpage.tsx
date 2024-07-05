import { useNavigate } from 'react-router-dom';

const MyAccoutpage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    //로그아웃 로직. 현재는 로그인으로 진행됨
    navigate('/login');
  };
  return (
    <div>
      <h2>My Account</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MyAccoutpage;
