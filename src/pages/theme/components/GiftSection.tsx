import { Container } from '@/components/common/layouts/Container';
import * as Styles from '../styles';
import { Grid } from '@/components/common/layouts/Grid';
import { RankData } from '@/constants/RankData';

const GiftSection = () => {
  return (
    <Styles.GiftSectionLayout>
      <Container>
        <Grid columns={2} gap={16}>
          {RankData.map((rank, index) => {
            return (
              <Styles.GiftContainer key={index}>
                <Styles.GiftImg src={rank.Img} alt="menu" width="100%" />
                <Styles.GiftInfoContainer>
                  <Styles.StoreInfo>{rank.storeTitle}</Styles.StoreInfo>
                  <Styles.MenuInfo>{rank.menu}</Styles.MenuInfo>
                  <Styles.PriceInfo>{rank.price}</Styles.PriceInfo>
                </Styles.GiftInfoContainer>
              </Styles.GiftContainer>
            );
          })}
        </Grid>
        <Grid columns={2}></Grid>
      </Container>
    </Styles.GiftSectionLayout>
  );
};

export default GiftSection;
