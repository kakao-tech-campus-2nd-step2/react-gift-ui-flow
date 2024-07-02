import { Container } from '@/components/ui/Layout/Container';

import { rankTitleStyle } from './styles';

export const RankTitle = () => {
  return (
    <Container justifyContent="center" css={rankTitleStyle}>
      실시간 급상승 선물랭킹
    </Container>
  );
};
