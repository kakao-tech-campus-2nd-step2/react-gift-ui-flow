import { useRankList } from '@/context/rankList/useRankList';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout/Container';

import { buttonStyle } from './styles';

export const ShowMoreButton = () => {
  const { isExpanded, handleShowLess, handleShowMore } = useRankList();

  const text = isExpanded ? '접기' : '더보기';
  const onClick = isExpanded ? handleShowLess : handleShowMore;

  return (
    <Container justifyContent="center" css={buttonStyle}>
      <Button theme="outline" size="response" width="32rem" onClick={onClick}>
        {text}
      </Button>
    </Container>
  );
};
