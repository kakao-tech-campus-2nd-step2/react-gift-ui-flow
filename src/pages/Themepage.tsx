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
    label: '언제나 응원해',
    title: '잘했고, 잘하고 있고, 잘할 거야',
    description: '반짝반짝 눈부신 노력에 박수  다 잘될 거예요, 화이팅!',
    backgroundColor: '#4F4F4F',
  },
  팬심저격: {
    label: '팬심저격',
    title: '최애에 진심인 당신을 위한',
    description: '팬심저격 굿즈 모음',
    backgroundColor: '#4F4F4F',
  },
  교환권: {
    label: '놓치면 후회할',
    title: '교환권 특가',
    description: '매주 바뀌는 혜택을 놓치지 마세요!',
    backgroundColor: '#4F4F4F',
  },
  건강비타민: {
    label: '건강 & 비타민',
    title: '건강을 기원하는 마음 담아 선물하세요❤️',
    description: '홍삼/녹용/비타민/콜라겐/오메가3/건강즙 등',
    backgroundColor: '#4F4F4F',
  },
  과일한우: {
    label: '인기 신선식품',
    title: '정성 가득한 과일/한우 선물로 감사한 마음을 전해보세요❤️',
    description: '과일, 한우, 수입소고기, 돼지고기, 전복, 견과 등',
    backgroundColor: '#4F4F4F',
  },
  출산키즈: {
    label: '출산/키즈',
    title: '벅찬 감동의 마음을 전할',
    description: '엄마와 아이를 위한 세심한 선물',
    backgroundColor: '#4F4F4F',
  },

  // Add more themes here
};

const items = [
  {
    id: 1,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '생일',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '스몰럭셔리',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '명품선물',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '가벼운서물',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '시원한선물',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '결혼집들이',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '응원시험',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '팬심저격',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '교환권',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '건강비타민',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '과일한우',
    price: 29000,
    imgSrc: '/images/item.png',
  },
  {
    id: 2,
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    category: '출산키즈',
    price: 29000,
    imgSrc: '/images/item.png',
  },
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
