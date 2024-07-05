import { Container } from '@/components/common/layouts/Container';
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
      <Container maxWidth="1200px">
        <Theme />
        <ItemList items={items} />
      </Container>
    </div>
  );
};

export default MainPage;
