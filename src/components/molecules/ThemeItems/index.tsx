import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Image } from '@/components/atoms/Image';
import { Paragraph } from '@/components/atoms/Paragraph';

export type ThemeItemProp = {
  imgSrc: string;
  pContent: string;
  linkTo?: string;
};

export const ThemeItem = ({ imgSrc, pContent, linkTo = '/' }: ThemeItemProp) => {
  return (
    <Link to={linkTo}>
      <ThemeItemWrapper>
        <ThemeImage src={imgSrc} />
        <ThemeItemParagraph content={pContent} />
      </ThemeItemWrapper>
    </Link>
  );
};

const ThemeItemWrapper = styled.div`
  padding: 25px 35px 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const ThemeImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-width: 90px;
  max-height: 90px;
  border-radius: 32px;
`;

const ThemeItemParagraph = styled(Paragraph)`
  padding-top: 7px;
  font-size: 16px;
  line-height: 28px;
  color: #333;
  text-decoration: none;
`;
