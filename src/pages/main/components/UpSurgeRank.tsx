import { useState } from 'react';
import { Container } from '@/components/common/layouts/Container';
import * as styles from '../styles';
import { giftTypeData, targetData } from '@/constants/RankData';
import { Grid } from '@/components/common/layouts/Grid';
import { filterRankData } from '@/utils/filterRankData';

const UpSurgeRank = () => {
  const [selectedTarget, setSelectedTarget] = useState<string>('전체');
  const [selectedGiftType, setSelectedGiftType] = useState<string>('전체');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const handleTargetClick = (target: string) => {
    setSelectedTarget(target);
    setVisibleCount(6);
  };

  const handleGiftTypeClick = (giftType: string) => {
    setSelectedGiftType(giftType);
    setVisibleCount(6);
  };

  const handleMoreClick = () => {
    setVisibleCount(filteredRankData.length);
  };

  const handleLessClick = () => {
    setVisibleCount(6);
  };

  const filteredRankData = filterRankData(selectedTarget, selectedGiftType);

  return (
    <styles.UpSurgeRankLayout>
      <Container>
        <styles.RankUpTitle>실시간 급상승 선물랭킹</styles.RankUpTitle>
        <styles.ButtonContainer>
          <styles.ButtonWrapper>
            {targetData.map((data, index) => (
              <styles.TargetButton key={index} onClick={() => handleTargetClick(data.title)}>
                <styles.ButtonText>{data.buttonTitle}</styles.ButtonText>
                <styles.ButtonTitle>{data.title}</styles.ButtonTitle>
              </styles.TargetButton>
            ))}
          </styles.ButtonWrapper>
          <styles.ButtonSpacer />
          <styles.GiftTypeButtonContainer>
            {giftTypeData.map((data, index) => (
              <styles.giftTypeButton key={index} onClick={() => handleGiftTypeClick(data.type)}>
                {data.type}
              </styles.giftTypeButton>
            ))}
          </styles.GiftTypeButtonContainer>
        </styles.ButtonContainer>
        <styles.RankList>
          <Grid columns={4} gap={16}>
            {filteredRankData.slice(0, visibleCount).map((data, index) => (
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
            {visibleCount < filteredRankData.length && (
              <styles.MoreButtonItem onClick={handleMoreClick}>더보기</styles.MoreButtonItem>
            )}
            {visibleCount > 6 && (
              <styles.MoreButtonItem onClick={handleLessClick}>접기</styles.MoreButtonItem>
            )}
          </styles.MoreButtonContainer>
        </styles.RankList>
      </Container>
    </styles.UpSurgeRankLayout>
  );
};

export default UpSurgeRank;
