import { useNavigate } from 'react-router-dom';
import { Image } from './common/Image';
import styled from '@emotion/styled';

interface ThemeProp {
  themeKey: string;
  themeName: string; // 테마 이름
  imgsrc: string; // 이미지 src
}

export default function Theme({ themeKey, themeName, imgsrc }: ThemeProp) {
  const navigate = useNavigate();

  const handleClick = () => {
    // themeKey로 ThemePage로 이동
    navigate(`/theme/${themeKey}`);
  };

  return (
    <ThemeWrapper>
      <ThemeContainer onClick={handleClick}>
        <Image
          radius={32}
          ratio="square"
          src={imgsrc}
          alt="생일 아이콘"
          width="90px"
          height="90px"
        ></Image>
        <ThemeName>{themeName}</ThemeName>
      </ThemeContainer>
    </ThemeWrapper>
  );
}

const ThemeWrapper = styled.div`
  box-sizing: border-box;
  height: 174px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 25px 35px 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ThemeName = styled.p`
  margin-top: 10px;
`;
