import styled from '@emotion/styled';

import { Container } from '../common/layouts/Container';

const HeaderWrapper = styled.header<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  p {
    padding-top: 12px;
  }
`;

const Label = styled.p`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 700;
`;
const Title = styled.h1`
  font-size: 30px;
  line-height: 40px;
  padding-top: 12px;
  word-break: break-word;
  font-weight: 700;
  color: rgb(255, 255, 255);
`;

const Description = styled.p`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.55);
`;

interface Theme {
  key: string;
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const themes: Theme[] = [
  {
    key: 'life_small_gift',
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: `당신의 센스를 뽐내줄 부담 없는 선물`,
    backgroundColor: 'rgb(75, 77, 80)',
  },
];

interface HeaderProps {
  themeKey: string;
}
const Header = ({ themeKey }: HeaderProps) => {
  const selectedTheme = themes.find((theme) => theme.key === themeKey) || themes[0]; // 기본 테마는 첫 번째로 설정

  const { label, title, description, backgroundColor } = selectedTheme;

  return (
    <HeaderWrapper backgroundColor={backgroundColor}>
      <Container style={{ height: '120px', padding: '50px 20px' }}>
        <Label>{label}</Label>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
