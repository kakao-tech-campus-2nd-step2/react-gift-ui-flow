import React from 'react';
import Container from '../../components/Layout/Container';
import Grid from '../../components/Layout/Grid';
import Image from '../../components/Image/Image';
import { ThemeContainer, CategoryItem, CategoryText } from './ThemeSection.styles';

const themes = [
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    category: '생일',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292320240418_YIDPC.png',
    category: '스몰럭셔리',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20210324102157_6d63fe7cc1af4d00bc904537134a60d7',
    category: '명품선물',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292120240418_VVXBZ.png',
    category: '가벼운선물',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F313720240325_QDECC.png',
    category: '시원한선물',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F314220240418_PZTWI.png',
    category: '결혼/집들이',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20200403204524_017c7a9eb93044e9bd42c3b28b395c95',
    category: '응원/시험',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F310220240702_INUMH.jpg',
    category: '팬심저격',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F293020240701_YFTMN.jpg',
    category: '교환권',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F334020240314_PHDHV.png',
    category: '건강/비타민',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2Fundefined20240315_JEGEL.png',
    category: '과일/한우',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20200403211415_cdf1337c6fd54b5aaffce46f1fcff86b',
    category: '출산/키즈',
  },
];

const ThemeSection = () => (
  <ThemeContainer>
    <Container
      width="100%"
      maxWidth="1024px"
      justifyContent="center"
      alignItems="center"
    >
      <Grid columns={6}>
        {themes.map((theme) => (
          <CategoryItem>
            <Container
              width="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding="25px 35px 24px"
            >
              <Image
                src={theme.src}
                width={90}
                radius={32}
              />
              <CategoryText>{theme.category}</CategoryText>
            </Container>
          </CategoryItem>
        ))}
      </Grid>
    </Container>
  </ThemeContainer>
);

export default ThemeSection;
