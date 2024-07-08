import '@styles/myAccount.css';

import LoginGuard from '@components/common/LoginGuard';
import { SetUserContext } from 'context/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function MyAccount() {
  const setUser = useContext(SetUserContext);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.setItem('authToken', '');
    setUser('');
    navigate('/');
  };

  return (
    <LoginGuard>
      <div className="my-account">
        <p className="my-account__title">닉네임님 안녕하세요!</p>
        <button onClick={logout} className="my-account__logout">
          로그아웃
        </button>
      </div>
    </LoginGuard>
  );
}

export default MyAccount;
