import getItems from '@/pages/ThemePage/GetItems';
import ItemList from '@/pages/ThemePage/ItemList';

const ThemePage = () => {
  const items = getItems();

  return (
    <div>
      <main>
        <ItemList items={items} />
      </main>
    </div>
  );
};

export default ThemePage;