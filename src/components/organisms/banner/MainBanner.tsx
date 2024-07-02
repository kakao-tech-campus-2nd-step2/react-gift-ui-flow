import Container from '@components/atoms/container/Container';
import { css } from '@emotion/react';
import Image from '@components/atoms/image/Image';
import { MAX_CONTENT_WIDTH } from '@styles/size';

function MainBanner() {
  return (
    <Container cssProps={{ padding: '40px 16px' }} justifyContent="center">
      <Container
        cssProps={{ width: '100%' }}
        alignItems="center"
        maxWidth={MAX_CONTENT_WIDTH}
      >
        <div css={css`
            width: 70px;
            height: 70px;
        `}
        >
          <Image ratio="square" radius={25} src="https://picsum.photos/200" />
        </div>
        <h1 css={css`
            font-size: 28px;
            padding-left: 16px;
        `}
        >
          선물 받을 친구를 선택해주세요.
        </h1>
      </Container>
    </Container>
  );
}

export default MainBanner;
