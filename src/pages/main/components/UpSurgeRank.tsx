import { Container } from '@/components/common/layouts/Container';
import * as styles from '../styles';
import { giftTypeData, RankData, targetData } from '@/constants/RankData';
import { Grid } from '@/components/common/layouts/Grid';

const UpSurgeRank = () => {
  return (
    <styles.UpSurgeRankLayout>
      <Container>
        <styles.RankUpTitle>실시간 급상승 선물랭킹</styles.RankUpTitle>
        <styles.ButtonContainer>
          <styles.ButtonWrapper>
            {targetData.map((data, index) => (
              <styles.TargetButton key={index}>
                <styles.ButtonText>{data.buttonTitle}</styles.ButtonText>
                <styles.ButtonTitle>{data.title}</styles.ButtonTitle>
              </styles.TargetButton>
            ))}
          </styles.ButtonWrapper>
          <styles.ButtonSpacer />
          <styles.GiftTypeButtonContainer>
            {giftTypeData.map((data, index) => (
              <styles.giftTypeButton key={index}>{data.type}</styles.giftTypeButton>
            ))}
          </styles.GiftTypeButtonContainer>
        </styles.ButtonContainer>
        <styles.RankList>
          <Grid columns={4} gap={16}>
            {RankData.map((data, index) => (
              <styles.RankItem key={index}>
                <styles.Rank>{data.rank}</styles.Rank>
                <styles.MenuImg src={data.Img} />
                <styles.StoreTitle>{data.storeTitle}</styles.StoreTitle>
                <styles.Menu>{data.menu}</styles.Menu>
                <styles.Price>{data.price}</styles.Price>
              </styles.RankItem>
            ))}
          </Grid>
          <styles.MoreButtonContainer>
            <styles.MoreButtonItem>더보기</styles.MoreButtonItem>
          </styles.MoreButtonContainer>
        </styles.RankList>
      </Container>
    </styles.UpSurgeRankLayout>
  );
};

export default UpSurgeRank;
