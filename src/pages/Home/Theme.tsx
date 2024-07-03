import styled from '@emotion/styled';

import { Image } from '@/components/common/Image';
import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants';

interface Category {
  id: number;
  annual: string;
  imageSrc: string;
}
const categories: Category[] = [
  {
    id: 1,
    annual: '생일',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    id: 2,
    annual: '졸업선물',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    id: 3,
    annual: '스몰럭셔리',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    id: 4,
    annual: '명품선물',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    id: 5,
    annual: '결혼/집들이',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    id: 6,
    annual: '따뜻한선물',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    id: 7,
    annual: '가벼운선물',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    id: 8,
    annual: '팬심저격',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    id: 9,
    annual: '교환권',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    id: 10,
    annual: '건강/비타민',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    id: 11,
    annual: '과일/한우',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
  {
    id: 12,
    annual: '출산/키즈',
    imageSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
  },
];

export const Theme = () => {
  return (
    <Wrapper>
      <Grid columns={6} style={{ rowGap: '50px' }}>
        {categories.map((category: Category) => (
          <Container key={category.id}>
            <Image src={category.imageSrc} radius={30} width={90} />
            {category.annual}
          </Container>
        ))}
      </Grid>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: ${breakpoints.md};
  margin: 0 auto;
  padding: 70px 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
