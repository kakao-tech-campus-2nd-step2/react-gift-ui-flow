import styled from '@emotion/styled';

import Chunsik from '@/assets/bar_img.png';
import { Image } from '@/components/common/Image';
import useSelectFriedns from '@/hooks/custom-hooks/useSelectFriends';
import { breakpoints } from '@/styles/variants/index';

const LogoContainer = styled.section`
  width: calc(100% - 32px);
  height: 40px;
  padding: 18px 16px;
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 40px 16px;
    height: 70px;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1024px;
`;

const ImageBox = styled(Image)`
  width: 40px;
  height: 40px;

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 70px;
    height: 70px;
  }
`;

const BarTitle = styled.p`
  font-size: 17px;
  padding: 0px 0px 0px 16px;

  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 24px;
  }
`;

const MainBar = () => {
  const { handleSelectFriendsClick } = useSelectFriedns();

  return (
    <LogoContainer>
      <BoxWrapper>
        <ImageBox
          src={Chunsik}
          alt="bar"
          ratio="square"
          radius={16}
          onClick={handleSelectFriendsClick}
        />
        <BarTitle>선물 받을 친구를 선택해주세요.</BarTitle>
      </BoxWrapper>
    </LogoContainer>
  );
};

export default MainBar;
