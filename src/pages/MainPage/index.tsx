import getItems from '@/pages/MainPage/GetItems';
import ItemList from '@/pages/MainPage/ItemList';
import Theme from '@/pages/MainPage/Theme';

const MainPage = () => {
  const items = getItems();

  return (
    <div>
      <main>
        <Theme />
        <ItemList items={items} />
      </main>
    </div>
  );
};

export default MainPage;
