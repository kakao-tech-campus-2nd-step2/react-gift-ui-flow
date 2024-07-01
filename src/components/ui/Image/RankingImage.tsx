import {
  GOODS_IMAGE_DEFAULT_RADIUS,
  GOODS_IMAGE_DEFAULT_RATIO,
} from '@/constants/styles';

import { Image } from '@/components/ui/Image/Image';
import { Container } from '@/components/ui/Layout/Container';

import { rankingStyle, rankingWrapperStyle } from './styles';

type RankedImageProps = {
  rank: number;
  imageSrc: string;
  alt: string;
};

export const RankedImage = ({ rank, imageSrc, alt }: RankedImageProps) => {
  return (
    <div css={rankingWrapperStyle}>
      <Container
        justifyContent="center"
        alignItems="center"
        css={rankingStyle(rank)}
      >
        {rank}
      </Container>
      <Image
        width="8rem"
        src={imageSrc}
        alt={alt}
        ratio={GOODS_IMAGE_DEFAULT_RATIO}
        radius={GOODS_IMAGE_DEFAULT_RADIUS}
      />
    </div>
  );
};
