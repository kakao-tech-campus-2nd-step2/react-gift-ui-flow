import { Grid } from '@/components/common/layouts/Grid';
import { useNavigate } from 'react-router-dom';
import { Image } from '@/components/common/Image';
import { ItemWrapper } from '@/pages/MainPage';

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
    <Grid columns={{ sm: 2, md: 4, lg: 6 }} gap={20}>
      {themes.map((theme) => (
        <ItemWrapper key={theme.key} onClick={() => handleLink(`/theme/${theme.key}`)}>
          <Image src="/images/cake.jpeg" radius={40} ratio="square"></Image>
          <p>{theme.name}</p>
        </ItemWrapper>
      ))}
    </Grid>
  );
};

export default Gift;
