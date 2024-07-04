import { Container } from '@/components/common/layouts/Container';
import * as styles from '../styles';

const TitleSection = () => {
  return (
    <styles.TitleSectionLayout>
      <Container>
        <styles.TypeText>가벼운 선물</styles.TypeText>
        <styles.Title>예산은 가볍게, 감동은 무겁게❤️</styles.Title>
        <styles.subTitle>당신의 센스를 뽐내줄 부담 없는 선물</styles.subTitle>
      </Container>
    </styles.TitleSectionLayout>
  );
};

export default TitleSection;
