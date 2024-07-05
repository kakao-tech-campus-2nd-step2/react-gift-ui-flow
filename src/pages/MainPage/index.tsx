import { Container } from '@/components/common/layouts/Container';
import getItems from '@/pages/MainPage/getItems';
import ItemList from '@/pages/MainPage/ItemList';
import Theme from '@/pages/MainPage/Theme';
import type { Item } from '@/pages/MainPage/types';

const MainPage = () => {
  const items: Item[] = getItems();

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
