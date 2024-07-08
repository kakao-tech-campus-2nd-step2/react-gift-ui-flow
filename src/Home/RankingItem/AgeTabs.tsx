import styled from '@emotion/styled';

type Category = 'all' | 'women' | 'men' | 'teens';

const categories = [
  { id: 'all', label: '전체', icon: 'ALL' },
  { id: 'women', label: '여성', icon: '👩🏻‍🦳' },
  { id: 'men', label: '남성', icon: '👨🏻‍🦳' },
  { id: 'teens', label: '청소년', icon: '👦🏻' },
];

interface AgeTabsProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const AgeTabs = ({ activeCategory, setActiveCategory }: AgeTabsProps) => {
  return (
    <Tabs>
      {categories.map((category) => (
        <Tab key={category.id} onClick={() => setActiveCategory(category.id as Category)}>
          <Icon isActive={category.id === activeCategory}>{category.icon}</Icon>
          <Label>{category.label}</Label>
        </Tab>
      ))}
    </Tabs>
  );
};

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 100px;
  cursor: pointer;
`;

const Icon = styled.div<{ isActive: boolean }>`
  width: 70px;
  height: 70px;
  background-color: ${(props) => (props.isActive ? '#4684e9' : '#e6f1ff')};
  border-radius: 40%;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Label = styled.div`
  font-size: 14px;
`;

export default AgeTabs;
