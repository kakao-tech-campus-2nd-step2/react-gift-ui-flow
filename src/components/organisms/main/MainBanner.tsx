import Container from '@components/atoms/container/Container';
import Image from '@components/atoms/image/Image';
import { BREAKPOINT_SM, MAX_CONTENT_WIDTH } from '@styles/size';
import { backgroundColors } from '@styles/colors';
import {
  BannerTitle, ImageContainer,
} from '@components/organisms/main/MainBanner.styles';
import { css } from '@emotion/react';

const imageStyle = css`
  border-radius: 24px;
  @media (max-width: ${BREAKPOINT_SM}) {
    border-radius: 16px;
  }
`;

function MainBanner() {
  return (
    <Container padding="40px 16px" justifyContent="center" backgroundColor={backgroundColors.root}>
      <Container
        elementSize="full-width"
        alignItems="center"
        maxWidth={MAX_CONTENT_WIDTH}
      >
        <ImageContainer>
          <Image
            ratio="square"
            src="https://picsum.photos/200"
            css={imageStyle}
          />
        </ImageContainer>
        <BannerTitle>
          선물 받을 친구를 선택해주세요.
        </BannerTitle>
      </Container>
    </Container>
  );
}

export default MainBanner;
