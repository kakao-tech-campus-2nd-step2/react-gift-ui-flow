// ThemePage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  return (
    <div>
      <main>
        <h1>Theme Page for {themeKey}</h1>
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
