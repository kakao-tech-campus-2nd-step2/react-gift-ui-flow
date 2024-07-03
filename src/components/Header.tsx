import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
const Header = () => {
  const navigate = useNavigate();

  const handleLink = (path: string) => {
    navigate(path);
  };
  return (
    <header>
      <h2 onClick={() => handleLink('/')}>선물하기</h2>
      <div className={styles.login} onClick={() => handleLink('/login')}>
        로그인
      </div>
    </header>
  );
};
export default Header;
