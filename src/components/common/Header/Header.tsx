import styled from '@emotion/styled';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LeftSection>
          <Logo
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
            alt="카카오 선물하기 로고"
          />
        </LeftSection>
        <RightSection>
          <Item>로그인</Item>
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

const Item = styled.p`
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
