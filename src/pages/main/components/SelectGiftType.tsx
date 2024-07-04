import { Grid } from '@/components/common/layouts/Grid';
import * as Styles from '../styles';
import { TypeData } from '@/constants/GiftData';
import { Container } from '@/components/common/layouts/Container';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/constants/Path';

const SelectGiftType = () => {
  const navigate = useNavigate();
  const HandlerNavigate = () => {
    navigate(PATHS.BIRTHDAY);
  };
  return (
    <Styles.SelectGiftLayout>
      <Container>
        <Grid columns={6}>
          {TypeData.map((data, index) => (
            <Styles.GiftTypeContainer onClick={HandlerNavigate} key={index}>
              <Styles.GiftImg src={data.image} alt={data.title} />
              <Styles.GiftTypeTitle>{data.title}</Styles.GiftTypeTitle>
            </Styles.GiftTypeContainer>
          ))}
        </Grid>
      </Container>
    </Styles.SelectGiftLayout>
  );
};

export default SelectGiftType;
