import { useParams } from 'react-router-dom';

import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Grid } from '@/components/common/layouts/Grid';
import { themeConfig } from '@/components/themeConfig';

const ThemePage = () => {
  const { themeKey } = useParams<{ themeKey?: string }>();

  if (!themeKey) {
    return <div>Invalid theme</div>;
  }

  const theme = themeConfig[themeKey];

  if (!theme) {
    return <div>Invalid theme</div>;
  }

  const products = Array.from({ length: 30 }, (_, index) => ({
    imageSrc: `https://via.placeholder.com/150`,
    subtitle: `Subtitle ${index + 1}`,
    title: `Product Title ${index + 1}`,
    amount: (index + 1) * 1000,
  }));

  return (
    <div>
      <main>
        <h1>{theme.title}</h1>
        <p>{theme.description}</p>
        <section>
          <h2>Products</h2>
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
      </main>
    </div>
  );
};

export default ThemePage;
