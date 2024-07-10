import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Image } from '@/components/common/Image/index';

import { Container } from '../common/layouts/Container';
import { Grid } from '../common/layouts/Grid';

const ThemeItem = styled.section`
  margin: 0 auto;
  text-align: center;
  padding: 25px 35px 24px;
  max-width: 100%;
`;

const Wrapper = styled(Grid)`
  padding: 45px 0 23px 0;
  margin: 0 
  max-width: 100%;
`;

interface ThemeItemComponentProps {
  link: string;
  src: string;
  alt: string;
  label: string;
}

const ThemeItemComponent = ({ link, src, alt, label }: ThemeItemComponentProps) => (
  <Link to={link}>
    <ThemeItem>
      <Image src={src} alt={alt} width="90px" radius={32} ratio="square" />
      <p>{label}</p>
    </ThemeItem>
  </Link>
);

const themeData: ThemeItemComponentProps[] = [
  {
    link: '/theme/life_small_gift',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '생일',
    label: '생일',
  },
  {
    link: '/theme/:themekey',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '졸업선물',
    label: '졸업선물',
  },
  {
    link: '/theme/:themekey',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '스몰럭셔리',
    label: '스몰럭셔리',
  },
  {
    link: '/theme/:themekey',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '명품선물',
    label: '명품선물',
  },
  {
    link: '/theme/:themekey',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '결혼/집들이',
    label: '결혼/집들이',
  },
  {
    link: '/theme/:themekey',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '따뜻한선물',
    label: '따뜻한선물',
  },
  {
    link: '/theme/:themekey',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '가벼운선물',
    label: '가벼운선물',
  },
  {
    link: '/theme/:themekey',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '팬심저격',
    label: '팬심저격',
  },
  {
    link: '/theme/:themekey',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '교환권',
    label: '교환권',
  },
  {
    link: '/theme/:themekey',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '건강/비타민',
    label: '건강/비타민',
  },
  {
    link: '/theme/:themekey',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '과일/한우',
    label: '과일/한우',
  },
  {
    link: '/theme/:themekey',
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    alt: '출산/키즈',
    label: '출산/키즈',
  },
];

const ThemeGrid = () => (
  <Wrapper columns={6} gap={12}>
    {themeData.map((theme, index) => (
      <ThemeItemComponent
        key={index}
        link={theme.link}
        src={theme.src}
        alt={theme.alt}
        label={theme.label}
      />
    ))}
  </Wrapper>
);

export const ThemeMenu = () => {
  return (
    <Container>
      <ThemeGrid />
    </Container>
  );
};

export default ThemeMenu;
