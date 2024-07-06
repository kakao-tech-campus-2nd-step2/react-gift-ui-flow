import { Grid } from '@/components/common/layouts/Grid';
import { useNavigate } from 'react-router-dom';
import { Image } from '@/components/common/Image';
import { ItemWrapper } from '@/pages/MainPage';
import styled from '@emotion/styled';
import { breakpoints } from '@/styles/variants/index';

const themes = [
  { key: 'birthday', name: '생일' },
  { key: 'graduation', name: '졸업 선물' },
  { key: 'small-luxury', name: '스몰 럭셔리' },
  { key: 'luxury', name: '명품 선물' },
  { key: 'marry', name: '결혼/집들이' },
  { key: 'heart', name: '따뜻한 선물' },
  { key: 'light', name: '가벼운 선물' },
  { key: 'fan', name: '팬심 저격' },
  { key: 'gifticon', name: '교환권' },
  { key: 'health', name: '건강/비타민' },
  { key: 'food', name: '과일/한우' },
  { key: 'kids', name: '출산/키즈' },
];

const Gift = () => {
  const navigate = useNavigate();

  const handleLink = (path: string) => {
    navigate(path);
  };

  return (
    <CenterGrid columns={{ initial: 4, lg: 6 }} gap={20} style={{ justifyContent: 'center' }}>
      {themes.map((theme) => (
        <ItemWrapper key={theme.key} onClick={() => handleLink(`/theme/${theme.key}`)}>
          <StyledImage src="/images/cake.jpeg" radius={40} ratio="square"></StyledImage>
          <p>{theme.name}</p>
        </ItemWrapper>
      ))}
    </CenterGrid>
  );
};

export default Gift;

const CenterGrid = styled(Grid)`
  justify-items: center;
  align-items: flex-start;

  @media (max-width: ${breakpoints.xs}) {
    max-width: 100%;
    max-height: 100%;
    border-radius: 40%;
    gap: 10px;
  }
`;

const StyledImage = styled(Image)`
  @media (max-width: ${breakpoints.xs}) {
    max-width: 100%;
    max-height: 100%;
    border-radius: 40%;
  }
`;
