import { useRankList } from '@/context/rankList/useRankList';

import { Button } from '@/components/ui/Button/Button';
import { Container } from '@/components/ui/Layout/Container';

import { moreButtonContainerStyle } from './styles';

export const ShowMoreButton = () => {
  const { isExpanded, handleShowLess, handleShowMore } = useRankList();
  return (
    <Container justifyContent="center" css={moreButtonContainerStyle}>
      {isExpanded ? (
        <Button theme="outline" size="response" onClick={handleShowLess}>
          접기
        </Button>
      ) : (
        <Button theme="outline" size="response" onClick={handleShowMore}>
          더보기
        </Button>
      )}
    </Container>
  );
};
