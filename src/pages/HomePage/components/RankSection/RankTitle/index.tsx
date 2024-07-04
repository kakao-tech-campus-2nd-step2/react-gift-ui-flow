import { Container } from '@/components/ui/Layout/Container';

import { titleStyle } from './styles';

export const RankTitle = () => {
  return (
    <Container justifyContent="center" css={titleStyle}>
      실시간 급상승 선물랭킹
    </Container>
  );
};
