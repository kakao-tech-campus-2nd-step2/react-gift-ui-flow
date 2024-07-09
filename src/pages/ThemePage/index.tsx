import { Container } from '@/components/common/layouts/Container';
import getItmes from '@/pages/ThemePage/getItmes';
import ItemList from '@/pages/ThemePage/ItemList';

const ThemePage = () => {
  const items = getItmes();

  return (
    <div>
      <Container maxWidth="1200px">
        <ItemList items={items} />
      </Container>
    </div>
  );
};

export default ThemePage;
