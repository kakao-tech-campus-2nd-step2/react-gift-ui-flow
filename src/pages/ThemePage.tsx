import { useParams } from 'react-router-dom';

import { themeConfig } from '@/components/themeConfig';

const ThemePage = () => {
  const params = useParams<{ themeKey: string }>();
  const themeKey = params.themeKey as string;
  const theme = themeConfig[themeKey];

  if (!theme) {
    return <div>Invalid theme</div>;
  }

  return (
    <div>
      <main>
        <h1>{theme.title}</h1>
        <p>{theme.description}</p>
        <section>
          <h2>Products</h2>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ThemePage;
