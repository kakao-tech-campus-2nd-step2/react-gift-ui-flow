import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Grid } from '@/components/common/layouts/Grid';

const ItemList = ({
  items,
}: {
  items: Array<{ imageSrc: string; subtitle: string; title: string; amount: number }>;
}) => {
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
