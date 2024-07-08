import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout/Container';

import { buttonStyle } from './styles';

type ShowMoreButtonProps = {
  text: string;
  onClick: () => void;
};

export const ShowMoreButton = ({ text, onClick }: ShowMoreButtonProps) => {
  return (
    <Container justifyContent="center" css={buttonStyle}>
      <Button theme="outline" size="response" width="32rem" onClick={onClick}>
        {text}
      </Button>
    </Container>
  );
};
