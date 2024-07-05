import getProducts from './getProducts';
import ProductSection from './ProductSection';

const ThemePage = () => {
  const products = getProducts();

  return (
    <div>
      <main>
        <ProductSection products={products} />
      </main>
    </div>
  );
};

export default ThemePage;
