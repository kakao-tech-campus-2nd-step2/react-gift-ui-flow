import styled from '@emotion/styled';

import { themes } from '@/data/sectionThemes';
import { breakpoints, colors } from '@/styles/variants';

import { Container } from '../../layouts/Container';

type HeaderProps = {
  themeKey: string;
};

type SectionProps = {
  backgroundColor: string;
};

export const Header = ({ themeKey }: HeaderProps) => {
  const theme = themes[themeKey];
  return (
    <Wrapper backgroundColor={theme.backgroundColor}>
      <Container>
        <Label>{theme.label}</Label>
        <Title>{theme.title}</Title>
        <Description>{theme.description}</Description>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section<SectionProps>(({ backgroundColor }) => ({
  width: '100%',
  padding: '27px 20px 23px',
  backgroundColor: backgroundColor,
  [`@media screen and (min-width: ${breakpoints.sm})`]: {
    padding: '50px 20px',
  },
}));
const Label = styled.p({
  fontWeight: '700',
  color: colors.labelGray,
  fontSize: '13px',
  lineHeight: '16px',
  [`@media screen and (min-width: ${breakpoints.sm})`]: {
    fontSize: '20px',
    lineHeight: '24px',
  },
});

const Title = styled.h1({
  fontWeight: '700',
  color: colors.white,
  fontSize: '18px',
  lineHeight: '26px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [`@media screen and (min-width: ${breakpoints.sm})`]: {
    fontSize: '30px',
    lineHeight: '40px',
    paddingTop: '12px',
    wordBreak: 'break-word',
  },
});

const Description = styled.p({
  color: colors.desGray,
  paddingTop: '5px',
  fontSize: '14px',
  lineHeight: '20px',
  wordBreak: 'break-all',
  [`@media screen and (min-width: ${breakpoints.sm})`]: {
    paddingTop: '12px',
    fontSize: '24px',
    lineHeight: '32px',
  },
});
