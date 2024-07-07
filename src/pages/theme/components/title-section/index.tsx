import { Container } from '@/components/common/layouts/Container';
import * as S from './styles';
import { giftData } from '@/constants/giftData';

const TitleSection = ({ pathData }: { pathData: string }) => {
  const matchedData = giftData.find((data) => data.type === pathData);

  if (!matchedData) {
    return null;
  }

  return (
    <S.TitleSectionLayout backgroundColor={matchedData.backgroundColor}>
      <Container>
        <S.TypeText>{matchedData.title}</S.TypeText>
        <S.Title>{matchedData.mainTitle}</S.Title>
        <S.SubTitle>{matchedData.subTitle}</S.SubTitle>
      </Container>
    </S.TitleSectionLayout>
  );
};

export default TitleSection;
