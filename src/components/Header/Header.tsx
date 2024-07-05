import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Image } from '../common/Image';
import { useUserInfo } from '@/providers/AuthProvider';

const Header = () => {
  const navigate = useNavigate();
  const { state } = useUserInfo();

  const handleLink = (path: string) => {
    navigate(path);
  };

  const handleWhere = (where: string) => {
    if (where === 'login') handleLink('/my-account');
    else handleLink('/login');
  };

  return (
    <HeaderWrapper>
      <Image
        style={{ cursor: 'pointer' }}
        src="/images/gift_logo.png"
        onClick={() => handleLink('/')}
        width={60}
      ></Image>
      <h3 style={{ cursor: 'pointer' }} onClick={() => handleWhere(state)}>
        {state === 'login' ? '내 계정' : '로그인'}
      </h3>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  background-color: #fff;
  z-index: 3;
`;
