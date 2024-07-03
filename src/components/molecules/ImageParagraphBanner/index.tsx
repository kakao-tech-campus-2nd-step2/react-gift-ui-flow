import styled from '@emotion/styled';
import type { MouseEventHandler } from 'react';

import { Container } from '@/components/atoms/Container';
import { ContainerJustifyContentType } from '@/components/atoms/Container/types';
import { Image } from '@/components/atoms/Image';
import { Paragraph } from '@/components/atoms/Paragraph';

type ImageBannerProps = {
  src: string;
  alt: string;
  onClick: MouseEventHandler<HTMLImageElement>;
  pContent: string;
};

export const ImageParagraphBanner = ({ src, alt, onClick, pContent }: ImageBannerProps) => {
  return (
    <ImageBannerWrapper>
      <Container justifyContent={ContainerJustifyContentType.flexStart}>
        <LeftImage src={src} alt={alt} onClick={onClick} />
        <RightParagraph content={pContent} />
      </Container>
    </ImageBannerWrapper>
  );
};

const ImageBannerWrapper = styled.div`
  width: 100%;
  height: 74px;
`;

const LeftImage = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 24px;
  cursor: pointer;
`;

const RightParagraph = styled(Paragraph)`
  font-size: 28px;
  line-height: 35px;
  padding-left: 16px;
  color: rgb(51, 51, 51);
  font-weight: 500;
`;
