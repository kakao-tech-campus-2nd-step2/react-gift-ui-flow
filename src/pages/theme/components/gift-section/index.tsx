import { Container } from '@/components/common/layouts/Container';
import * as S from './styles';
import { Grid } from '@/components/common/layouts/Grid';
import { RankData } from '@/constants/RankData';

const GiftSection = () => {
  return (
    <S.GiftSectionLayout>
      <Container>
        <Grid columns={2} gap={16}>
          {RankData.map((rank, index) => {
            return (
              <S.GiftContainer key={index}>
                <S.GiftImg src={rank.Img} alt="menu" width="100%" />
                <S.GiftInfoContainer>
                  <S.StoreInfo>{rank.storeTitle}</S.StoreInfo>
                  <S.MenuInfo>{rank.menu}</S.MenuInfo>
                  <S.PriceInfo>{rank.price}</S.PriceInfo>
                </S.GiftInfoContainer>
              </S.GiftContainer>
            );
          })}
        </Grid>
        <Grid columns={2}></Grid>
      </Container>
    </S.GiftSectionLayout>
  );
};

export default GiftSection;
