import {
  GOODS_IMAGE_DEFAULT_RADIUS,
  GOODS_IMAGE_DEFAULT_RATIO,
} from '@/constants/styles';
import { ThemeListType } from '@/types/themeType';

import { Image } from '@/components/ui/Image/Image';
import { Container } from '@/components/ui/Layout/Container';

import { GoodsItemDetail } from './GoodsItemDetail';
import { containerStyle } from './styles';

export interface GoodsItemProps extends ThemeListType {
  imageSrc: string;
}

export const GoodsItem = ({
  imageSrc,
  subtitle,
  title,
  amount,
}: GoodsItemProps) => {
  return (
    <Container
      maxWidth="100%"
      flexDirection="column"
      alignItems="center"
      css={containerStyle}
    >
      <Image
        width="100%"
        src={imageSrc}
        ratio={GOODS_IMAGE_DEFAULT_RATIO}
        radius={GOODS_IMAGE_DEFAULT_RADIUS}
      />
      <GoodsItemDetail subtitle={subtitle} title={title} amount={amount} />
    </Container>
  );
};
