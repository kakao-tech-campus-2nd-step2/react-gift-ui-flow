import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const ImageLink = 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png';

const categories = [
  { key: 'birthday', name: '생일', image: ImageLink },
  { key: 'graduation', name: '졸업선물', image: ImageLink },
  { key: 'luxury', name: '스몰럭셔리', image: ImageLink },
  { key: 'famous', name: '명품선물', image: ImageLink },
  { key: 'wedding', name: '결혼/집들이', image: ImageLink },
  { key: 'warm', name: '따뜻한선물', image: ImageLink },
  { key: 'light', name: '가벼운선물', image: ImageLink },
  { key: 'affordable', name: '팬심저격', image: ImageLink },
  { key: 'voucher', name: '교환권', image: ImageLink },
  { key: 'health', name: '건강/비타민', image: ImageLink },
  { key: 'fruit', name: '과일/한우', image: ImageLink },
  { key: 'kids', name: '출산/키즈', image: ImageLink },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (key: string) => {
    navigate(`/theme/life_small_gift`);
  };

  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryItem key={category.key} onClick={() => handleCategoryClick(category.key)}>
          <Image src={category.image} alt={category.name} />
          <CategoryName>{category.name}</CategoryName>
        </CategoryItem>
      ))}
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const CategoryItem = styled.div`
  margin: 10px;
  text-align: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CategoryName = styled.p`
  font-size: 14px;
`;

export default CategorySection;