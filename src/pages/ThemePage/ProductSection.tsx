import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Grid } from '@/components/common/layouts/Grid';

const ProductSection = ({
  products,
}: {
  products: Array<{ imageSrc: string; subtitle: string; title: string; amount: number }>;
}) => {
  return (
    <section>
      <Grid columns={{ sm: 2, md: 3, lg: 4 }} gap={20}>
        {products.map((product, index) => (
          <DefaultGoodsItems
            key={index}
            imageSrc={product.imageSrc}
            subtitle={product.subtitle}
            title={product.title}
            amount={product.amount}
          />
        ))}
      </Grid>
    </section>
  );
};

export default ProductSection;
