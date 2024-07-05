import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Grid } from '@/components/common/layouts/Grid';
import type { Item } from '@/pages/ThemePage/types'; // types.ts 파일에서 Item 타입 가져오기

interface ItemListProps {
  items: Item[];
}

const ItemList = ({ items }: ItemListProps) => {
  return (
    <section>
      <Grid columns={{ sm: 2, md: 3, lg: 4 }} gap={20}>
        {items.map((item, index) => (
          <DefaultGoodsItems
            key={index}
            imageSrc={item.imageSrc}
            subtitle={item.subtitle}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Grid>
    </section>
  );
};

export default ItemList;
