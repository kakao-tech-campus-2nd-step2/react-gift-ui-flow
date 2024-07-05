import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Path } from '@/App-core/path';
import { Image } from '@/components/common/Image';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';

type Props = {
  image: string;
  label: string;
} & React.HTMLAttributes<HTMLDivElement>;

const CategoryItem = ({ image, label, ...props }: Props) => (
  <ItemWrapper {...props}>
    <StyledImage src={image} alt={label} />
    <ItemLabel>{label}</ItemLabel>
  </ItemWrapper>
);

const ItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 0px 10px;
`;

const StyledImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 35px;
`;

const ItemLabel = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: #333;
`;

const LinkWrapper = styled.div`
  a {
    text-decoration: none;
  }
`;

export const Category = () => (
  <Section>
    <Container>
      <Grid columns={{ md: 6 }} gap={50}>
        {[
          { to: 'life_small_gift', label: '생일' },
          { to: 'life_small_gift', label: '졸업선물' },
          { to: 'life_small_gift', label: '스몰럭셔리' },
          { to: 'life_small_gift', label: '명품선물' },
          { to: 'life_small_gift', label: '결혼/집들이' },
          { to: 'life_small_gift', label: '따뜻한선물' },
          { to: 'life_small_gift', label: '가벼운선물' },
          { to: 'life_small_gift', label: '팬심저격' },
          { to: 'life_small_gift', label: '교환권' },
          { to: 'life_small_gift', label: '건강/비타민' },
          { to: 'life_small_gift', label: '과일/한우' },
          { to: 'life_small_gift', label: '출산/키즈' },
        ].map(({ to, label }) => (
          <LinkWrapper key={label}>
            <Link to={Path.theme(to)}>
              <CategoryItem image="/images/present.png" label={label} />
            </Link>
          </LinkWrapper>
        ))}
      </Grid>
    </Container>
  </Section>
);

const Section = styled.section`
  padding: 14px;
`;
