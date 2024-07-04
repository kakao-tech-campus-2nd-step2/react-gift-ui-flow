import styled from '@emotion/styled';

import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/layouts/Container/index';

export const MyAccountPage: React.FC = () => {
  return (
    <MySection>
      <h1>안녕하세요!</h1>
      <MyContainer>
        <Button theme="darkGray" size="small">
          <strong>로그아웃</strong>
        </Button>
      </MyContainer>
    </MySection>
  );
};

const MySection = styled.section``;

const MyContainer = styled(Container)``;
