import styled from '@emotion/styled';

type Props = {
  themeKey: string;
  themeName: string;
  imgSrc: string;
};

const ThemeItem: React.FC<Props> = ({ themeName, imgSrc }) => {
  return (
    <ThemeItemContainer>
      <ThemeImage src={imgSrc} alt={themeName} />
      <ThemeName>{themeName}</ThemeName>
    </ThemeItemContainer>
  );
};

export default ThemeItem;

const ThemeItemContainer = styled.div`
  text-align: center;
`;

const ThemeImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ThemeName = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;
