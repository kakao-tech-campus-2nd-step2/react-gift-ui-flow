import styled from '@emotion/styled';
import React from 'react';

const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #daeefb;
  border-radius: 10px;
  border: 1px solid #dae5fb;
  padding: 10px;
  width: 85%;
  margin: 20px auto;
`;

const Tab = styled.div<{ active: boolean }>`
  color: ${(props) => (props.active ? '#4285f4' : '#7fa1e7')};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;
  width: 95%;
  text-align: center;
  pointer-events: auto;
`;

const TabsContent = styled.div`
  margin: 50px auto;
`;


interface FilterTabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterTab: React.FC<FilterTabProps> = ({ active, onClick, children }) => {
  return <Tab active={active} onClick={onClick}>{children}</Tab>;
};

interface FilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <TabsContent>
    <TabsWrapper>
      <FilterTab active={activeTab === '받고 싶어한'} onClick={() => onTabChange('받고 싶어한')}>받고 싶어한</FilterTab>
      <FilterTab active={activeTab === '많이 선물한'} onClick={() => onTabChange('많이 선물한')}>많이 선물한</FilterTab>
      <FilterTab active={activeTab === '위시로 받은'} onClick={() => onTabChange('위시로 받은')}>위시로 받은</FilterTab>
    </TabsWrapper>
    </TabsContent>
  );
};

export default FilterTabs;
