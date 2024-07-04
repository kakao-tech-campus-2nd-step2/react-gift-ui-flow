import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/AuthContext';

import styles from './Header.module.scss';
const Header = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  const handleLink = (path: string) => {
    navigate(path);
  };
  return (
    <header>
      <h2 onClick={() => handleLink('/')}>선물하기</h2>
      {userId ? (
        <div className={styles.login} onClick={() => handleLink('/my-account')}>
          내 계정
        </div>
      ) : (
        <div className={styles.login} onClick={() => handleLink('/login')}>
          로그인
        </div>
      )}
    </header>
  );
};
export default Header;
