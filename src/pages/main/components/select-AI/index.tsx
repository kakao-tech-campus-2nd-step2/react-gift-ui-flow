import { Container } from '@/components/common/layouts/Container';
import * as S from './styles';

const SelectAI = () => {
  return (
    <S.SelectAILayout>
      <Container>
        <S.SelectAIContainer>
          <S.AIText>AI가 추천하는 선물</S.AIText>
          <S.AITitle>선물을 추천받고 싶은 친구를 선택해주세요.</S.AITitle>
        </S.SelectAIContainer>
      </Container>
    </S.SelectAILayout>
  );
};

export default SelectAI;
