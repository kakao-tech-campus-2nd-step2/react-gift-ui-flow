import { Grid } from '@/components/common/layouts/Grid';
import * as styles from '../styles';
import { TypeData } from '@/constants/GiftData';
import { Container } from '@/components/common/layouts/Container';

const SelectGiftType = () => {
  return (
    <styles.SelectGiftLayout>
      <Container>
        <Grid columns={6}>
          {TypeData.map((data, index) => (
            <styles.GiftTypeContainer key={index}>
              <styles.GiftImg src={data.image} alt={data.title} />
              <styles.GiftTypeTitle>{data.title}</styles.GiftTypeTitle>
            </styles.GiftTypeContainer>
          ))}
        </Grid>
      </Container>
    </styles.SelectGiftLayout>
  );
};

export default SelectGiftType;
