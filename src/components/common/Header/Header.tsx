import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/contexts/AuthContext';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleLogoClick = () => {
    navigate(`/`);
  };

  const handleLoginClick = () => {
    navigate(`/login`);
  };

  const handleMyAccountClick = () => {
    navigate(`/my-account`);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LeftSection>
          <Logo
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
            alt="카카오 선물하기 로고"
            onClick={handleLogoClick}
          />
        </LeftSection>
        <RightSection>
          {isLoggedIn ? (
            <MenuItem onClick={handleMyAccountClick}>내 계정</MenuItem>
          ) : (
            <MenuItem onClick={handleLoginClick}>로그인</MenuItem>
          )}
        </RightSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  background-color: #ffffff;
  height: 50px;
`;

const HeaderContent = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.p`
  margin: 0;
  color: #000000;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    text-decoration: none;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  height: 100%;
  max-height: 55px;
`;
