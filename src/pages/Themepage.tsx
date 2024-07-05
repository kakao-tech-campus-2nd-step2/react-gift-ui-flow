import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

type Theme = {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
};

const themes: Record<string, Theme> = {
  생일: {
    label: '생일테마',
    title: '감동을 높여줄 생일 선물 리스트',
    description: '예산에 쏙쏙 맞춰 AI가 자동으로 추천드려요!',
    backgroundColor: '#FFD700',
  },
  스몰럭셔리: {
    label: '스몰럭셔리',
    title: '당신을 위한 작은 사치,',
    description: '스몰 럭셔리 아이템',
    backgroundColor: '#FF69B4',
  },
  명품선물: {
    label: '명품선물',
    title: '품격있는 명품 선물 제안',
    description: '소중한 이에게 명품의 품격을 선물하세요',
    backgroundColor: '#4F4F4F',
  },
  가벼운선물: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게 ❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#4F4F4F',
  },
  시원한선물: {
    label: '시원한 선물',
    title: '어느새 찾아온 무더운 여름',
    description: '기분 좋아지는 시원한 선물',
    backgroundColor: '#4F4F4F',
  },
  결혼집들이: {
    label: '결혼/이사/집들이',
    title: '들려오는 지인들의 좋은 소식',
    description: '취향저격 감성파 vs 활용만점 실용파',
    backgroundColor: '#4F4F4F',
  },
  응원시험: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게 ❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#4F4F4F',
  },
  팬심저격: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게 ❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#4F4F4F',
  },
  교환권: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게 ❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#4F4F4F',
  },
  건강비타민: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게 ❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#4F4F4F',
  },
  과일한우: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게 ❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#4F4F4F',
  },
  출산키즈: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게 ❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#4F4F4F',
  },

  // Add more themes here
};

const items = [
  {
    id: 1,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: 'lightGifts',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: 'lightGifts',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  // Add more items here
];

const Themepage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  if (!themeKey || !themes[themeKey]) {
    return <div>Invalid theme key</div>;
  }

  const theme = themes[themeKey];

  const filteredItems = items.filter((item) => item.category === themeKey);

  return (
    <Container>
      <HeaderSection style={{ backgroundColor: theme.backgroundColor }}>
        <h1>{theme.label}</h1>
        <h2>{theme.title}</h2>
        <p>{theme.description}</p>
      </HeaderSection>

      <Content>
        <ItemList>
          {filteredItems.map((item) => (
            <Item key={item.id}>
              <ItemImage src={item.imgSrc} alt={item.name} />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price}원</ItemPrice>
              </ItemDetails>
            </Item>
          ))}
        </ItemList>
      </Content>
    </Container>
  );
};

export default Themepage;

const Container = styled.div`
  width: 100%;
`;

const HeaderSection = styled.div`
  padding: 20px;
  color: #fff;
  text-align: center;
`;

const Content = styled.div`
  padding: 20px;
`;

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Item = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  text-align: center;
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
`;

const ItemDetails = styled.div`
  padding: 10px;
`;

const ItemName = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ItemPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
