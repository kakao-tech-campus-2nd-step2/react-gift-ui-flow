import styled from '@emotion/styled';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Section1 from '../components/common/Main/Section1';
import Section2 from '../components/common/Main/Section2';
import Section3 from '../components/common/Main/Section3';
import Section4 from '../components/common/Main/Section4';

const MainPageContainer = styled.section`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  margin-top: 54px;
`;

function MainPage() {
  return (
    <MainPageContainer>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </MainPageContainer>
  );
}

export default MainPage;
