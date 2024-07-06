import { Grid } from '@/components/common/layouts/Grid';
import * as S from './styles';
import { giftData } from '@/constants/giftData';
import { Container } from '@/components/common/layouts/Container';
import { useNavigate } from 'react-router-dom';

const SelectGiftType = () => {
  const navigate = useNavigate();
  return (
    <S.SelectGiftLayout>
      <Container>
        <Grid columns={6}>
          {giftData.map((data, index) => (
            <S.GiftTypeContainer onClick={() => navigate(`/theme/${data.type}`)} key={index}>
              <S.GiftImg src={data.image} alt={data.title} />
              <S.GiftTypeTitle>{data.title}</S.GiftTypeTitle>
            </S.GiftTypeContainer>
          ))}
        </Grid>
      </Container>
    </S.SelectGiftLayout>
  );
};

export default SelectGiftType;
