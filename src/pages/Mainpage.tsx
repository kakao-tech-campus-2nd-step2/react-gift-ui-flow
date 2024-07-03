import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import ChooseFriend from '@/components/ChooseFriend';
import ThemeList from '@/components/ThemeList';
import styled from '@emotion/styled';
import GiftRanking from '@/components/GiftRanking/GiftRanking';

export default function Mainpage() {
  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <ChooseFriend />
        <ThemeList />
        <SelectFriendWrapper>
          <SelectFriendContainer>
            <SelectFriendBox>
              <SelectFriendText1>AI가 추천하는 선물</SelectFriendText1>
              <SelectFriendText2>선물을 추천받고 싶은 친구를 선택해주세요.</SelectFriendText2>
            </SelectFriendBox>
          </SelectFriendContainer>
        </SelectFriendWrapper>
        <EmptyBox />
        <GiftRanking />
      </MainContent>
      <Footer />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

const SelectFriendWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 76px;
`;

const SelectFriendContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectFriendBox = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(254, 235, 0);
`;

const SelectFriendText1 = styled.p`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  font-size: 17px;
  line-height: 19px;
  padding-bottom: 5px;
`;

const SelectFriendText2 = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`;

const EmptyBox = styled.div`
  width: 100vw;
  height: 120px;
`;
