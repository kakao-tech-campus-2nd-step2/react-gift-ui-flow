import styled from '@emotion/styled'
import { useNavigate } from "react-router-dom";


const Header: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  }
  const goToSignIn = () => {
    navigate("/login")
  }

  return (
    <HeaderWrapper>
      <GoToHome onClick={goToHome}>선물하기</GoToHome>
      <Logo 
          src="https://w7.pngwing.com/pngs/390/806/png-transparent-rilakkuma-kakaotalk-kakao-friends-south-korea-kakaofriends-sticker-desktop-wallpaper-snout-thumbnail.png"
      />
      <GoToSignIn onClick={goToSignIn}>Sign in</GoToSignIn>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div `
  position: fixed;
  margin: auto;
  width: 100vw;
  height: 30px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
`;

const GoToHome = styled.button `
  float: left;
  margin: 3px;
  margin-right: 80vw;
  position: absolute;
  font-size: 1.5rem;
`;

const Logo = styled.img `
  align-items: center;
  justify-content: center;
  height: 100%;
  aspect-ratio: 1;
`;

const GoToSignIn = styled.button `
  font-size: 1.5rem;
  float: right;
  margin: 3px;
  margin-left: 80vw;
  position: absolute;
`;

export default Header;