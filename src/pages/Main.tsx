/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import CategorySection from '@/components/CategorySection/CategorySection';
import { Button } from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import Header, { HeaderSubtitle, HeaderTitle } from '@/components/common/Header';
import { Image } from '@/components/common/Image';
import RankingSection from '@/components/RankingSection/RankingSection';
import { useAuth } from '@/context/AuthContext';

import choonsik from '../images/choonsik.png';

const MainPage = styled.div`
  position: relative;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
`;

const MainContainer = styled.div`
  position: relative;
  padding-top: 64px;
  z-index: 0;
`;

const SelectFriend = styled.div`
  background-color: #f6f6f6;
  padding: 40px calc(8% + 100px);
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    padding: 40px calc(4% + 20px);
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ChoonsikContainer = styled.div`
  cursor: pointer;
`;

const SelectFriendTitle = styled.div`
  font-size: 26px;
  padding: 0 20px;
`;

const ButtonContainerKakao = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  margin: 0 calc(8% + 120px);
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ButtonSubtitle = styled.div`
  color: #857d52;
`;

const ButtonTitle = styled.div`
  padding-top: 5px;
  font-weight: bold;
  font-size: 18px;
`;

const Main = () => {
  const { authToken } = useAuth();

  return (
    <MainPage>
      <HeaderWrapper>
        <Header>
          <Link to={'/'}>
            <HeaderTitle>선물하기</HeaderTitle>
          </Link>
          <Link to={authToken ? '/my-account' : '/login'}>
            <HeaderSubtitle>{authToken ? '내 계정' : '로그인'}</HeaderSubtitle>
          </Link>
        </Header>
      </HeaderWrapper>

      <MainContainer>
        <SelectFriend>
          <ChoonsikContainer onClick={() => alert('선물 받을 친구 선택하기')}>
            <Image
              src={choonsik}
              alt="choonsik"
              radius={20}
              ratio={'square'}
              width={70}
              height={70}
            />
          </ChoonsikContainer>
          <SelectFriendTitle>선물 받을 친구를 선택해주세요.</SelectFriendTitle>
        </SelectFriend>

        <CategorySection />

        <ButtonContainerKakao>
          <StyledButton theme="kakao" size="responsive">
            <ButtonSubtitle>AI가 추천하는 선물</ButtonSubtitle>
            <ButtonTitle>선물을 추천받고 싶은 친구를 선택해주세요.</ButtonTitle>
          </StyledButton>
        </ButtonContainerKakao>

        <RankingSection />

        <Footer title="카카오톡 선물하기" />
      </MainContainer>
    </MainPage>
  );
};

export default Main;
