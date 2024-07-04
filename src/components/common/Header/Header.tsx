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

const HeaderContainer = styled.header``;

const HeaderContent = styled.div``;

const LeftSection = styled.div``;

const RightSection = styled.div``;

const Item = styled.p``;

const Logo = styled.img``;
