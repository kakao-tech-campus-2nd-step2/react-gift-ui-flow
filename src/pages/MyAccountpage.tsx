import { useNavigate } from 'react-router-dom';

const MyAccoutpage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    //
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
