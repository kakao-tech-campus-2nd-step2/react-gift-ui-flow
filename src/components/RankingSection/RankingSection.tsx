/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useState } from 'react';

import { Button } from '@/components/common/Button';

import ranking01 from '../../images/ranking01.png';
import { RankingGoodsItems } from '../common/GoodsItem/Ranking';

const RankingSection = () => {
  const [selectedItemWho, setSelectedItemWho] = useState<string>('all');
  const [selectedItemWhich, setSelectedItemWhich] = useState<string>('받고 싶어한');
  const [more, setMore] = useState<boolean>(false);

  const handleSelectWho = (item: string) => {
    setSelectedItemWho(item);
  };

  const handleSelectWhich = (item: string) => {
    setSelectedItemWhich(item);
  };

  const handleMore = () => {
    setMore((prevMore) => !prevMore);
  };

  const generateDummyItems = () => {
    const dummyItems = [];
    for (let i = 1; i <= 21; i++) {
      dummyItems.push({
        rankingIndex: i,
        subtitle: 'BBQ',
        title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
        amount: 29000,
        imageSrc: ranking01,
      });
    }
    return dummyItems;
  };

  const items = generateDummyItems();
  const visibleItems = more ? items : items.slice(0, 6);

  return (
    <RankingContainer>
      <RankingTitle>실시간 급상승 선물랭킹</RankingTitle>
      <RankingSelectWhoContainer>
        <RankingWhoItem selected={selectedItemWho === 'all'} onClick={() => handleSelectWho('all')}>
          <WhoItemImg selected={selectedItemWho === 'all'}>ALL</WhoItemImg>
          <WhoItemText>전체</WhoItemText>
        </RankingWhoItem>
        <RankingWhoItem selected={selectedItemWho === 'woman'} onClick={() => handleSelectWho('woman')}>
          <WhoItemImg selected={selectedItemWho === 'woman'}>👩🏻‍🦳</WhoItemImg>
          <WhoItemText>여성이</WhoItemText>
        </RankingWhoItem>
        <RankingWhoItem selected={selectedItemWho === 'man'} onClick={() => handleSelectWho('man')}>
          <WhoItemImg selected={selectedItemWho === 'man'}>👨🏻‍🦳</WhoItemImg>
          <WhoItemText>남성이</WhoItemText>
        </RankingWhoItem>
        <RankingWhoItem selected={selectedItemWho === 'children'} onClick={() => handleSelectWho('children')}>
          <WhoItemImg selected={selectedItemWho === 'children'}>👦🏻</WhoItemImg>
          <WhoItemText>청소년이</WhoItemText>
        </RankingWhoItem>
      </RankingSelectWhoContainer>
      <RankingSelectBox>
        <RankingBoxItem
          selected={selectedItemWhich === '받고 싶어한'}
          onClick={() => handleSelectWhich('받고 싶어한')}
        >
          받고 싶어한
        </RankingBoxItem>
        <RankingBoxItem
          selected={selectedItemWhich === '많이 선물한'}
          onClick={() => handleSelectWhich('많이 선물한')}
        >
          많이 선물한
        </RankingBoxItem>
        <RankingBoxItem
          selected={selectedItemWhich === '위시로 받은'}
          onClick={() => handleSelectWhich('위시로 받은')}
        >
          위시로 받은
        </RankingBoxItem>
      </RankingSelectBox>
      <RankingItemContainer>
        {visibleItems.map((item) => (
          <RankingItem key={item.rankingIndex}>
            <RankingGoodsItems
              rankingIndex={item.rankingIndex}
              imageSrc={item.imageSrc}
              subtitle={item.subtitle}
              title={item.title}
              amount={item.amount}
            />
          </RankingItem>
        ))}
      </RankingItemContainer>
      <ButtonContainerSimple>
        <Button theme="outline" size="responsive" className="button02" onClick={handleMore}>
          <ButtonTitle>{more ? '접기' : '더보기'}</ButtonTitle>
        </Button>
      </ButtonContainerSimple>
    </RankingContainer>
  );
};

export default RankingSection;

interface SelectedProps {
  selected: boolean;
}

const RankingContainer = styled.div`
  margin: 120px calc(8% + 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RankingTitle = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

const RankingSelectWhoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 100%;

`;

const RankingWhoItem = styled.div<SelectedProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 0 calc(6% + 20px);
  cursor: pointer;
`;

const WhoItemImg = styled.div<SelectedProps>`
  background-color: ${({ selected }) => (selected ? '#719ce9' : '#e3effe')};
  border-radius: 20px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ selected }) => (selected ? '#fff' : '#6c6c6c')};
`;

const WhoItemText = styled.div`
  margin-top: 10px;
  color: #6c6c6c;
`;

const RankingSelectBox = styled.div`
  display: flex;
  background-color: #e3effe;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #d9e5fb;
  margin: 10px;
`;

const RankingBoxItem = styled.div<SelectedProps>`
  margin: 20px 30px;
  color: ${({ selected }) => (selected ? '#4078df' : '#719ce9')};
  font-size: 22px;
  cursor: pointer;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;

const RankingItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  padding: 40px 0;
`;

const RankingItem = styled.div`
  /*  */
`;

const ButtonContainerSimple = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ButtonTitle = styled.div`
  color: #333;
`;
