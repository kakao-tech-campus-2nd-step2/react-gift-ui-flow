import { useParams } from 'react-router-dom';

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

  const products = Array.from({ length: 30 }, (_, index) => `Product ${index + 1}`);

  return (
    <div>
      <main>
        <h1>{theme.title}</h1>
        <p>{theme.description}</p>
        <section>
          <h2>Products</h2>
          <Grid columns={{ sm: 2, md: 3, lg: 4 }} gap={20}>
            {products.map((product, index) => (
              <div key={index} style={{ border: '1px solid #ccc', padding: '10px' }}>
                {product}
              </div>
            ))}
          </Grid>
        </section>
      </main>
    </div>
  );
};

export default ThemePage;
