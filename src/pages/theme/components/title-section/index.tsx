import { Container } from '@/components/common/layouts/Container';
import * as S from './styles';
import { TypeData } from '@/constants/GiftData';

const TitleSection = ({ pathData }: { pathData: string }) => {
  const matchedData = TypeData.find((data) => data.type === pathData);

  if (!matchedData) {
    return null;
  }

  return (
    <S.TitleSectionLayout backgroundColor={matchedData.backgroundColor}>
      <Container>
        <S.TypeText>{matchedData.title}</S.TypeText>
        <S.Title>{matchedData.mainTitle}</S.Title>
        <S.subTitle>{matchedData.subTitle}</S.subTitle>
      </Container>
    </S.TitleSectionLayout>
  );
  // return (
  //   <S.TitleSectionLayout>
  //     {TypeData.map((data, index) => {
  //       return (
  //         <Container key={index}>
  //           <S.TypeText>{data.title}</S.TypeText>
  //           <S.Title>{data.mainTitle}</S.Title>
  //           <S.subTitle>{data.subTitle}</S.subTitle>
  //         </Container>
  //       );
  //     })}
  //   </S.TitleSectionLayout>
  // );
};

export default TitleSection;
