import '@styles/myAccount.css';

import { useNavigate } from 'react-router-dom';

function MyAccount() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.setItem('authToken', '');
    navigate('/');
  };

  return (
    <div className="my-account">
      <p className="my-account__title">닉네임님 안녕하세요!</p>
      <button onClick={logout} className="my-account__logout">
        로그아웃
      </button>
    </div>
  );
}

export default MyAccount;
