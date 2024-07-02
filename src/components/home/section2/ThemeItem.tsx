import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface ThemeItemProps {
  themeKey: string;
}

const StyledLink = styled(Link)`
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const ThemeItemContainer = styled.div`
  padding: 25px 35px 24px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 13px 0px 12px;
  }

  img {
    max-width: 90px;
    max-height: 90px;
    border-radius: 32px;
    object-fit: cover;
    object-position: center center;
    aspect-ratio: auto;
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      max-width: 50px;
      max-height: 50px;
      border-radius: 18px;
    }
  }

  p {
    padding-top: 7px;
    font-size: 16px;
    line-height: 28px;

    @media (max-width: 768px) {
      padding-top: 5px;
      font-size: 13px;
      line-height: 17px;
    }
  }
`;

const ThemeItem = ({ themeKey }: ThemeItemProps) => {
  return (
    <StyledLink to={`/theme/${encodeURIComponent(themeKey)}`}>
      <ThemeItemContainer>
        <img
          src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          alt={themeKey}
        />
        <p>{themeKey}</p>
      </ThemeItemContainer>
    </StyledLink>
  );
};

export default ThemeItem;
