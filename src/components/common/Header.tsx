import styled from '@emotion/styled';

const Container = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  max-width: 100vw;
  height: 54px;
  padding: 0px 16px;
  background: #fff;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 54px;
  }
  p {
    cursor: pointer;
    font-size: 14px;
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <a href="/">
            <img
              src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
              alt="카카오 선물하기 로고"
            />{' '}
          </a>
          <div>
            <p>로그인</p>
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Header;
