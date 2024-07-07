import Container from '@components/atoms/container/Container';
import { css } from '@emotion/react';
import headerLogo from '@assets/images/header_logo.png';
import styled from '@emotion/styled';
import { HEADER_HEIGHT, MAX_CONTENT_WIDTH } from '@styles/size';
import { Link } from 'react-router-dom';
import Paths from '@constants/Paths';
import { useContext } from 'react';
import { LoginContext } from '@/providers/LoginContextProvider';

interface PageHeaderProps {
  displayLogo?: boolean;
}

const HeaderAccountButton = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function PageHeader({ displayLogo }: PageHeaderProps) {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <header css={css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      padding: 0 16px;
      z-index: 9999;
      display: flex;
      justify-content: center;
      background-color: #ffffff;
    `}
    >
      <Container
        elementSize={{ height: HEADER_HEIGHT, width: '100%' }}
        justifyContent={displayLogo ? 'space-between' : 'flex-end'}
        maxWidth={MAX_CONTENT_WIDTH}
      >
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
          <Link to={isLoggedIn ? Paths.MYACCOUNT_PAGE : Paths.LOGIN_PAGE}>
            {isLoggedIn ? '마이페이지' : '로그인'}
          </Link>
        </HeaderAccountButton>
      </Container>
    </header>
  );
}

export default PageHeader;
