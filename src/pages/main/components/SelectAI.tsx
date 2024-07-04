import { Container } from '@/components/common/layouts/Container';
import * as styles from '../styles';

const SelectAI = () => {
  return (
    <styles.SelectAILayout>
      <Container>
        <styles.SelectAIContainer>
          <styles.AIText>AI가 추천하는 선물</styles.AIText>
          <styles.AITitle>선물을 추천받고 싶은 친구를 선택해주세요.</styles.AITitle>
        </styles.SelectAIContainer>
      </Container>
    </styles.SelectAILayout>
  );
};

export default SelectAI;
