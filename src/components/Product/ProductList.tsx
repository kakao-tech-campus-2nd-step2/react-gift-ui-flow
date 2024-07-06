import { Grid } from '../common/layouts/Grid';
import { RankingGoodsItems } from '../common/GoodsItem/Ranking';

interface Product {
  id: number;
  category: string;
  name: string;
}

interface ProductsProps {
  products: Product[];
}

const ProductList = ({ products }: ProductsProps) => {
  return (
    <Grid columns={{ initial: 3, md: 4, lg: 6 }} gap={20}>
      {products.map((product, index) => (
        <div key={product.id}>
          <RankingGoodsItems
            imageSrc="/images/gift.jpg"
            subtitle="BBQ"
            title="BBQ 양념치킨"
            amount={29000}
            rankingIndex={index + 1}
          />
        </div>
      ))}
    </Grid>
  );
};

export default ProductList;
