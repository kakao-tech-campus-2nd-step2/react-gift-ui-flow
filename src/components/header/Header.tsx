import GiftLogo from '@/assets/header/pc_gift_logo.png';
import * as S from './styles';
import * as G from '@/styles/globalStyles';
import { useNavigate } from 'react-router-dom';
import { AUTH, PATHS } from '@/constants/Path';
import { Container } from '@/components/common/layouts/Container';

const Header = () => {
  const sessionToken = sessionStorage.getItem('authToken');
  const navigate = useNavigate();

  return (
    <S.HeaderLayout>
      <Container>
        <G.InnerContainer justifyContent="space-between">
          <div onClick={() => navigate(PATHS.MAIN)}>
            <S.GiftLogo src={GiftLogo} alt="Gift-Logo" />
          </div>
          <div onClick={() => navigate(sessionToken ? AUTH.MY_ACCOUNT : AUTH.LOGIN)}>
            <S.Login>{sessionToken ? '내 계정' : '로그인'}</S.Login>
          </div>
        </G.InnerContainer>
      </Container>
    </S.HeaderLayout>
  );
};

export default Header;
