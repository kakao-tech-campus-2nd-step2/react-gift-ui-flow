import styled from '@emotion/styled';

import ThemeCategory from '@/components/theme/ThemeCategory';
import ThemeFooter from '@/components/theme/ThemeFooter';
import ThemeHeader from '@/components/theme/ThemeHeader';

const MainPage: React.FC = () => {
  return (
    <MainPageWrapper>
      <ThemeContainer>
        <ThemeHeader />
        <ThemeCategory />
        <ThemeFooter />
      </ThemeContainer>

      <EmptyField/>
    </MainPageWrapper>
  )
}

export default MainPage

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ThemeContainer = styled.div`
  width: 100%;
  position: relative;
  top: 0px;
  left: 0px;
  margin-top: 54px;
`;

const EmptyField = styled.div`
  width: 100%;
  background-color: inherit;

  @media screen and (min-width: 1024px) {
    height: 120px;
  } 

  @media screen and (min-width: 768px) {
    height: 80px;
  } 

  @media screen and (min-width: 0) {
    height: 40px;
  } 
`;