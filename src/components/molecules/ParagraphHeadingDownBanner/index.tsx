import styled from '@emotion/styled';

import { ContainerDirectionType } from '@/components/atoms/FlatFlex/types';
import type { HeadingLevel } from '@/components/atoms/Heading';
import { Heading } from '@/components/atoms/Heading';
import { Paragraph } from '@/components/atoms/Paragraph';
import { CenteringContainer } from '@/components/molecules/CenteringContainer';

type ParagraphHeadingBannerProp = {
  hNum: HeadingLevel;
  hContent: string;
  pContent: string;
};

export const ParagraphHeadingDownBanner = ({
  hNum,
  hContent,
  pContent,
}: ParagraphHeadingBannerProp) => {
  return (
    <CenteringContainer flexDirection={ContainerDirectionType.column}>
      <ThinGrayParagraph content={pContent} />
      <BoldHeading hNumber={hNum} hContent={hContent} />
    </CenteringContainer>
  );
};

const ThinGrayParagraph = styled(Paragraph)`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  font-size: 17px;
  line-height: 19px;
  padding-bottom: 5px;
`;

const BoldHeading = styled(Heading)`
  font-weight: 700;
  color: #000;
  font-size: 18px;
  line-height: 20px;
`;
