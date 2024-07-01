import {
  GOODS_IMAGE_DEFAULT_RADIUS,
  GOODS_IMAGE_DEFAULT_RATIO,
} from '@/constants/styles';

import { Image } from '@/components/ui/Image/Image';
import { Container } from '@/components/ui/Layout/Container';

import { GoodsItemDetail } from './GoodsItemDetail';
import { containerStyle } from './styles';

interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
}

export const GoodsItem = ({
  imageSrc,
  subtitle,
  title,
  amount,
}: GoodsItemProps) => {
  return (
    <Container
      maxWidth="8rem"
      flexDirection="column"
      alignItems="center"
      css={containerStyle}
    >
      <Image
        width="8rem"
        src={imageSrc}
        ratio={GOODS_IMAGE_DEFAULT_RATIO}
        radius={GOODS_IMAGE_DEFAULT_RADIUS}
      />
      <GoodsItemDetail subtitle={subtitle} title={title} amount={amount} />
    </Container>
  );
};
