import GetItem from '@/pages/MainPage/GetItem';
import ItemList from '@/pages/MainPage/ItemList';
import Theme from '@/pages/MainPage/Theme';

interface Item {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

const MainPage = () => {
  const items: Item[] = GetItem();

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
