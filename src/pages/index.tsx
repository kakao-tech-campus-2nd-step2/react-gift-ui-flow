import { Container } from '@/components/common/layouts/Container';
import GetItem from '@/pages/ThemePage/GetItem';
import ItemList from '@/pages/ThemePage/ItemList';

const ThemePage = () => {
  const items = GetItem();

  return (
    <div>
      <Container maxWidth="1200px">
        <ItemList items={items} />
      </Container>
    </div>
  );
};

export default ThemePage;
