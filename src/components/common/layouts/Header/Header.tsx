import styled from '@emotion/styled'

const Wrapper = styled.header`
  position: fixed;
  box-sizing: border-box;
  z-index: 9999;
  width: 100%;
  max-width: 100vw;
  height: 54px;
  background-color: rgb(255, 255, 255);
  padding: 0px 16px;
  
  div {
    width: 100%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;

    .inner {
      width: 100%;
      max-width: 1024px;
      display: flex;
      flex-direction: row;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;

      img {
        height: 54px;
      }

      p {
        -webkit-box-align: center;
        align-items: center;
        font-size: 14px;
        color: rgb(0, 0, 0);
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <div>
        <div className="inner">
          <a href="/">
            <img src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png" alt="카카오 선물하기 로고" />
          </a>
          <p>로그인</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header