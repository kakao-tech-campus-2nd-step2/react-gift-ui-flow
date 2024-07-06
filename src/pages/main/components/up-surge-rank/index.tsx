import { useState } from 'react';
import { Container } from '@/components/common/layouts/Container';
import * as S from './styles';
import { giftTypeData, targetData } from '@/constants/rankData';
import { Grid } from '@/components/common/layouts/Grid';
import { filterRankData } from '@/utils/filterRankData';

interface RankData {
  rank: number;
  Img: string;
  storeTitle: string;
  menu: string;
  price: string;
}

interface TargetData {
  buttonTitle: string;
  title: string;
}

interface GiftTypeData {
  type: string;
}

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
  const filteredRankData: RankData[] = filterRankData(selectedTarget, selectedGiftType);

  return (
    <S.UpSurgeRankLayout>
      <Container>
        <S.RankUpTitle>실시간 급상승 선물랭킹</S.RankUpTitle>
        <S.ButtonContainer>
          <S.ButtonWrapper>
            {targetData.map((data: TargetData, index: number) => (
              <S.TargetButton key={index} onClick={() => handleTargetClick(data.title)}>
                <S.ButtonText>{data.buttonTitle}</S.ButtonText>
                <S.ButtonTitle>{data.title}</S.ButtonTitle>
              </S.TargetButton>
            ))}
          </S.ButtonWrapper>
          <S.ButtonSpacer />
          <S.GiftTypeButtonContainer>
            {giftTypeData.map((data: GiftTypeData, index: number) => (
              <S.giftTypeButton key={index} onClick={() => handleGiftTypeClick(data.type)}>
                {data.type}
              </S.giftTypeButton>
            ))}
          </S.GiftTypeButtonContainer>
        </S.ButtonContainer>
        <S.RankList>
          <Grid columns={4} gap={16}>
            {filteredRankData.slice(0, visibleCount).map((data: RankData, index: number) => (
              <S.RankItem key={index}>
                <S.Rank>{data.rank}</S.Rank>
                <S.MenuImg src={data.Img} />
                <S.StoreTitle>{data.storeTitle}</S.StoreTitle>
                <S.Menu>{data.menu}</S.Menu>
                <S.Price>{data.price}</S.Price>
              </S.RankItem>
            ))}
          </Grid>
          <S.MoreButtonContainer>
            {visibleCount < filteredRankData.length && (
              <S.MoreButtonItem onClick={handleMoreClick}>더보기</S.MoreButtonItem>
            )}
            {visibleCount > 6 && (
              <S.MoreButtonItem onClick={handleLessClick}>접기</S.MoreButtonItem>
            )}
          </S.MoreButtonContainer>
        </S.RankList>
      </Container>
    </S.UpSurgeRankLayout>
  );
};

export default UpSurgeRank;
