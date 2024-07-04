import { Gift } from '@dto/Gift';
import GoodsItem from '@components/molecules/goodsItem/GoodsItem';
import { useRef } from 'react';
import ResponsiveGrid from '@components/atoms/grid/responsive/ResponsiveGrid';
import { generateRandomId } from '@/utils';

interface GiftDisplaySectionProps {
  gifts: Gift[];
  indexed?: boolean,
  maxColumns: number,
  minColumns: number,
}

function GiftDisplaySection({
  gifts, indexed, maxColumns, minColumns,
}: GiftDisplaySectionProps) {
  const sectionRandomId = useRef(generateRandomId());

  return (
    <ResponsiveGrid gap={16} columnsDefault={maxColumns} columnsSm={minColumns}>
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
    </ResponsiveGrid>
  );
}

export default GiftDisplaySection;
