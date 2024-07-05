import { Container } from '@/components/common/layouts/Container';
import * as styles from '../styles';
import { TypeData } from '@/constants/GiftData';

const TitleSection = ({ pathData }: { pathData: string }) => {
  const matchedData = TypeData.find((data) => data.type === pathData);

  if (!matchedData) {
    return null;
  }

  return (
    <styles.TitleSectionLayout backgroundColor={matchedData.backgroundColor}>
      <Container>
        <styles.TypeText>{matchedData.title}</styles.TypeText>
        <styles.Title>{matchedData.mainTitle}</styles.Title>
        <styles.subTitle>{matchedData.subTitle}</styles.subTitle>
      </Container>
    </styles.TitleSectionLayout>
  );
  // return (
  //   <styles.TitleSectionLayout>
  //     {TypeData.map((data, index) => {
  //       return (
  //         <Container key={index}>
  //           <styles.TypeText>{data.title}</styles.TypeText>
  //           <styles.Title>{data.mainTitle}</styles.Title>
  //           <styles.subTitle>{data.subTitle}</styles.subTitle>
  //         </Container>
  //       );
  //     })}
  //   </styles.TitleSectionLayout>
  // );
};

export default TitleSection;
