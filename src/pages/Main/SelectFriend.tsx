import styled from "@emotion/styled";

import { Image } from "@/components/common/Image";
import { breakpoints } from "@/styles/variants";

const SelectFriend = () => {
  const handleClick = () => {
    alert("친구를 선택했습니다!");
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <StyledImg
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
          ratio="square"
          onClick={handleClick}
        />

        <StyledP>선물 받을 친구를 선택해주세요.</StyledP>
      </InnerWrapper>
    </Wrapper>
  );
};

export default SelectFriend;

const Wrapper = styled.section`
  width: 100%;
  height: 150px;
  background: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakpoints.sm}) {
    height: 76px;
  }
`;

const InnerWrapper = styled.div`
  width: 1024px;
  padding: 16px;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const StyledImg = styled(Image)`
  width: 70px;
  cursor: pointer;
  border-radius: 24px;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 40px;
    border-radius: 16px;
  }
`;

const StyledP = styled.p`
  padding-left: 16px;
  color: rgb(51, 51, 51);
  line-height: 22px;
  font-weight: 500;
  font-size: 28px;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 17px;
  }
`;
