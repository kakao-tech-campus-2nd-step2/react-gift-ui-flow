import styled from '@emotion/styled';

import { Footer } from '@/components/common/Footer/Footer';
import { ThemeSection } from '@/components/section/Theme/Theme';

const MainPage = () => {
  return (
    <Wrapper>
      <ThemeSection gap={0} columns={4}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </ThemeSection>
      <Footer />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div({
  width: '100%',
  position: 'absolute',
  top: '0px',
  left: '0px',
  marginTop: '54px',
});
