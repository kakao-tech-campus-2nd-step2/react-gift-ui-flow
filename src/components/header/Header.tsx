import GiftLogo from '@/assets/header/pc_gift_logo.png';
import * as styles from './styles';
import * as globals from '@/styles/GlobalStyles';
import { useNavigate } from 'react-router-dom';
import { AUTH, PATHS } from '@/constants/Path';
import { Container } from '@/components/common/layouts/Container';

// interface HeaderProps {
//   children: React.ReactNode;
// }

const Header = () => {
  const navigate = useNavigate();

  return (
    <styles.HeaderLayout>
      <Container>
        <globals.InnerContainer justifyContent="space-between">
          <div onClick={() => navigate(PATHS.MAIN)}>
            <styles.GiftLogo src={GiftLogo} alt="Gift-Logo" />
          </div>
          <div onClick={() => navigate(AUTH.LOGIN)}>
            <styles.Login>로그인</styles.Login>
          </div>
        </globals.InnerContainer>
      </Container>
    </styles.HeaderLayout>
  );
};

export default Header;
