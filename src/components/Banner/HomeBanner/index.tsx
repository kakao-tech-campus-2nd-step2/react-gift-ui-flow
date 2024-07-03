import { Image } from "@/components/common/Image";
import styled from "@emotion/styled";
import { Container } from "../../common/layouts/Container/index";

const HomeBanner = () => {
  return (
    <StyledHomeBanner>
      <Container>
        <StyledHomeBannerLayout>
          <Image
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
            radius={20}
            sizes="1px"
            width={64}
            height={64}
          />
          <span>선물 받을 친구를 선택하세요.</span>
        </StyledHomeBannerLayout>
      </Container>
    </StyledHomeBanner>
  );
};

export const StyledBanner = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 20px;
`;

const StyledHomeBanner = styled(StyledBanner)`
  background-color: #f8f8f8;
`;

const StyledHomeBannerLayout = styled.div`
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
