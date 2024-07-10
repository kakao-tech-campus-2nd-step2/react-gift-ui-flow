import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface ThemeProps{
  themeKey: string;
  themeLabel: string;
  imgSrc: string;
}

const ThemeItems = ({ themeKey, themeLabel, imgSrc }: ThemeProps) => {

  const navigate = useNavigate();

  const  handleImgClick = () => {
    navigate(`/theme/${themeKey}`);
  }

  return(
    <>
      <ItemWrapper>
        <ThemeThumbnail src={imgSrc} onClick={handleImgClick} />
        {themeLabel}
      </ItemWrapper>
    </>
  )
}

export default ThemeItems

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  content-justify: center;
`;

const ThemeThumbnail = styled.img`
  cursor: pointer;
  width: 50%;
  aspect-ratio: 1;
  margin-bottom: 10px;
`;