import { Image } from "@/components/common/Image";
import styled from "@emotion/styled";
import IMAGE from "@/constants/Image";
import Banner from "..";

const HomeBanner = () => {
  return (
    <Banner backgroundColor="#f8f8f8">
      <StyledHomeBanner>
        <Image
          src={IMAGE.FRIEND}
          radius={20}
          sizes="1px"
          width={64}
          height={64}
        />
        <span>선물 받을 친구를 선택하세요.</span>
      </StyledHomeBanner>
    </Banner>
  );
};

const StyledHomeBanner = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  & > span {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export default HomeBanner;
