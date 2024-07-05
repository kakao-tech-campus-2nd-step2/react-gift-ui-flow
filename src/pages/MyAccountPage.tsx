import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MyAccountPageProps {
  username: string;
  onLogout: () => void;
}

const MyAccountPage: React.FC<MyAccountPageProps> = ({ username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{username}님 안녕하세요!</h1>
      <button
        onClick={handleLogout}
        style={{
          padding: '10px 20px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '30px',
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default MyAccountPage;
