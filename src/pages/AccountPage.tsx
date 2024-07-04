import './../styles/Account.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AccountPageProps {
  username: string;
  onLogout: () => void;
}

const AccountPage: React.FC<AccountPageProps> = ({ username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="account-container">
      <h1>{username}님 안녕하세요!</h1>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default AccountPage;
