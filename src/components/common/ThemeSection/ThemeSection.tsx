import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SectionWrapper = styled.section`
  padding: 20px;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;

  img {
    border-radius: 10px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const themes = [
  { key: 'birthday', label: '생일' },
  { key: 'graduation', label: '졸업선물' },
  { key: 'smallLuxury', label: '스몰럭셔리' },
  { key: 'luxury', label: '명품선물' },
  { key: 'wedding', label: '결혼/집들이' },
  { key: 'warmGift', label: '따뜻한선물' },
  { key: 'lightGift', label: '가벼운선물' },
  { key: 'fans', label: '팬심저격' },
  { key: 'voucher', label: '교환권' },
  { key: 'health', label: '건강/비타민' },
  { key: 'fruit', label: '과일/한우' },
  { key: 'baby', label: '출산/키즈' },
];

const ThemeSection: React.FC = () => {
  const navigate = useNavigate();

  const handleItemClick = (themeKey: string) => {
    navigate(`/theme/${themeKey}`);
  };

  return (
    <SectionWrapper>
      <ItemGrid>
        {themes.map((theme) => (
          <Item key={theme.key} onClick={() => handleItemClick(theme.key)}>
            <img src={`${process.env.PUBLIC_URL}/defaultImage.png`} alt={theme.label} />
            <div>{theme.label}</div>
          </Item>
        ))}
      </ItemGrid>
    </SectionWrapper>
  );
};

export default ThemeSection;
