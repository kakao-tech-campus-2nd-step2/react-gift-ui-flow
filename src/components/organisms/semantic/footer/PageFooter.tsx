import Container from '@components/atoms/container/Container';
import { css } from '@emotion/react';
import { backgroundColors } from '@styles/colors';

function PageFooter() {
  return (
    <footer css={css`
        padding: 28px 16px 88px;
        background-color: ${backgroundColors.root}
    `}
    >
      <Container>
        <p>카카오톡 선물하기</p>
      </Container>
    </footer>
  );
}

export default PageFooter;
