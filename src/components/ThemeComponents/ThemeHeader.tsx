import styled from '@emotion/styled';

interface TextProps {
  size: number;
  weight: number;
  alpha: number;
}

interface ThemeHeaderProps {
  themeKey: ThemeKey;
}

type ThemeKey = 'life_small_gift' | 'small_luxury';

interface Theme {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const themes: Record<ThemeKey, Theme> = {
  life_small_gift: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: 'rgb(75, 77, 80)',
  },
  small_luxury: {
    label: '스몰럭셔리',
    title: '당신을 위한 작은 사치🎁',
    description: '스몰 럭셔리 아이템',
    backgroundColor: 'rgb(100, 100, 100)',
  },
  // 다른 테마도 존재
};

export default function ThemeHeader({ themeKey }: ThemeHeaderProps) {
  const theme = themes[themeKey];

  return (
    <HeaderWrapper backgroundColor={theme.backgroundColor}>
      <HeaderContent>
        <Text size={20} weight={700} alpha={0.7}>
          {theme.label}
        </Text>
        <HeaderTitle>{theme.title}</HeaderTitle>
        <Text size={24} weight={400} alpha={0.55}>
          {theme.description}
        </Text>
      </HeaderContent>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section<{ backgroundColor: string }>`
  margin-top: 54px;
  width: 100vw;
  height: 220px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  line-height: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Text = styled.p<TextProps>`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  color: ${(props) => `rgba(255, 255, 255, ${props.alpha})`};
`;
