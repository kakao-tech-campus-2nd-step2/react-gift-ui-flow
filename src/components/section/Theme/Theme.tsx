import styled from '@emotion/styled';

import { Image } from '@/components/common/Image';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants';
import items from '@/utils/types/items';

type ThemeSectionProps = {
  gap?: number;
  columns: number | Record<string, number>;
  children: React.ReactNode;
};

export const Items: React.FC<ThemeSectionProps> = ({ gap, columns, children }) => (
  <SectionWrapper>
    <Container>
      <Grid columns={columns} gap={gap}>
        {children}
      </Grid>
    </Container>
  </SectionWrapper>
);

export const ThemeSection = () => (
  <Items gap={0} columns={{ xs: 4, sm: 4, md: 6 }}>
    {items.map((item, index) => (
      <ItemContainer key={index}>
        <Image
          src={item.image}
          alt={`선물 테마: ${item.title}`}
          width="90x"
          radius={30}
          ratio="square"
        />
        <p>{item.title}</p>
      </ItemContainer>
    ))}
  </Items>
);
const SectionWrapper = styled.section`
  padding: 14px 14px 3px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 45px 52px 23px;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 13px 0px 12px;
  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 25px 35px 24px;
  }
`;
