import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/common/Header'; // Header 컴포넌트의 경로를 맞춰주세요
import { themeConfig } from '@/components/common/Theme/themeConfig'; // themeConfig 파일의 경로를 맞춰주세요

const ThemePage = () => {
  const params = useParams();
  const themeKey = params.themeKey as string;
  const theme = themeConfig[themeKey];

  return (
    <div>
      <Header themeKey={themeKey} />
      <main>
        <h1>{theme?.title}</h1>
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
