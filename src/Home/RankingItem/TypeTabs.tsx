import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';

const typecategories = [
  { id: 'wanted', label: '받고 싶어한' },
  { id: 'gifted', label: '많이 선물한' },
  { id: 'wishlist', label: '위시로 받은' },
];

const TypeTabs = ({
  activeType,
  setActiveType,
}: {
  activeType: string;
  setActiveType: (type: string) => void;
}) => {
  return (
    <Container>
      <TypeContainer>
        {typecategories.map((type) => (
          <Type
            key={type.id}
            isActive={type.id === activeType}
            onClick={() => setActiveType(type.id)}
          >
            {type.label}
          </Type>
        ))}
      </TypeContainer>
    </Container>
  );
};

const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e6f0ff;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Type = styled.div<{ isActive: boolean }>`
  margin: 0 30px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#007bff' : '#333')};
  font-size: 20px;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};

  &:hover {
    color: #007bff;
  }
`;

export default TypeTabs;
