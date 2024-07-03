import styled from '@emotion/styled';

import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants';

type ThemeSectionProps = {
  gap?: number;
  columns: number | Record<string, number>;
  children: React.ReactNode;
};

export const ThemeSection: React.FC<ThemeSectionProps> = ({ gap, columns, children }) => (
  <Wrapper>
    <Container>
      <Grid columns={columns} gap={gap}>
        {children}
      </Grid>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div({
  padding: '14px 14px 3px',
  [`@media screen and (max-width: ${breakpoints.sm})`]: {
    padding: '45px 52px 23px',
  },
});

const Container = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
