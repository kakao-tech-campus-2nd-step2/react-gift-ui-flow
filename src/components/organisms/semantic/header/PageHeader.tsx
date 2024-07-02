import Container from '@components/atoms/container/Container';
import { css } from '@emotion/react';
import headerLogo from '@assets/images/header_logo.png';
import styled from '@emotion/styled';
import { HEADER_HEIGHT } from '@styles/size';

interface PageHeaderProps {
  isLoggedIn?: boolean;
  displayLogo?: boolean;
}

const HeaderAccountButton = styled.p`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

function PageHeader({ isLoggedIn, displayLogo }: PageHeaderProps) {
  return (
    <header css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0 16px;
        z-index: 9999;
    `}
    >
      <Container elementSize={{ height: HEADER_HEIGHT, width: '100%' }} justifyContent={displayLogo ? 'space-between' : 'flex-end'}>
        {displayLogo
          ? (
            <img
              css={css`
                  height: 100%;
              `}
              src={headerLogo}
            />
          ) : null}
        <HeaderAccountButton>
          {/* TODO: 로그인 페이지 또는 마이페이지로 이동하게끔 연결하기 */}
          {isLoggedIn ? '마이페이지' : '로그인'}
        </HeaderAccountButton>
      </Container>
    </header>
  );
}

export default PageHeader;
