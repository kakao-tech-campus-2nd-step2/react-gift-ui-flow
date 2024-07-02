import { Gift } from '@dto/Gift';
import Grid from '@components/atoms/grid/Grid';
import GoodsItem from '@components/molecules/goodsItem/GoodsItem';
import { useRef } from 'react';
import { generateRandomId } from '@/utils';

interface GiftDisplaySectionProps {
  gifts: Gift[];
  indexed?: boolean,
  maxColumns: number,
  // minColumns: number,
}

function GiftDisplaySection({
  gifts, indexed, maxColumns, /* minColumns, */
}: GiftDisplaySectionProps) {
  const sectionRandomId = useRef(generateRandomId());

  return (
    <Grid gap={16} columns={maxColumns}>
      {gifts.map((gift, i) => {
        const key = `${sectionRandomId.current}-gift-${i}`;

        return (
          <GoodsItem
            imageSrc={gift.imageSrc}
            subtitle={gift.subtitle}
            title={gift.title}
            amount={gift.amount}
            rankingIndex={indexed ? i + 1 : undefined}
            key={key}
          />
        );
      })}
    </Grid>
  );
}

export default GiftDisplaySection;
