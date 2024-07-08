import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/AuthContext';

import styles from './Header.module.scss';
const Header = () => {
  const { authToken } = useAuth();
  const navigate = useNavigate();

  return (
    <header>
      <h2 onClick={() => navigate('/')}>선물하기</h2>
      {authToken ? (
        <div className={styles.login} onClick={() => navigate('/my-account')}>
          내 계정
        </div>
      ) : (
        <div className={styles.login} onClick={() => navigate('/login')}>

          로그인
        </div>
      )}
    </header>
  );
};
export default Header;
