import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants';

type ThemeSectionProps = {
  gap?: number;
  columns: number | Record<string, number>;
  children: React.ReactNode;
};

export const ThemeSection: React.FC<ThemeSectionProps> = ({ gap, columns, children }) => (
  <SectionWrapper>
    <Container>
      <Grid columns={columns} gap={gap}>
        {children}
      </Grid>
    </Container>
  </SectionWrapper>
);

const SectionWrapper = styled.section`
  padding: 14px 14px 3px;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 45px 52px 23px;
  }
`;
