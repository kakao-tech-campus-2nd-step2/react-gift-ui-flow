import styled from '@emotion/styled';
import { useState } from 'react';

import PersonButton from '@/components/common/HomeComponents/Ranking/PersonButton';
import RankTypeButton from '@/components/common/HomeComponents/Ranking/RankButton';

const initialFilterOption = {
  targetType: 'ALL',
  rankType: 'MANY_WISH',
};

export const  Filter = () => {
  const [filterOption, setFilterOption] = useState(initialFilterOption);

  return (
      <Wrapper>
        <PersonButtons>
          <PersonButton
            icon="ALL"
            label="전체"
            selected={filterOption.targetType === 'ALL'}
            onClick={() => setFilterOption({ ...filterOption, targetType: 'ALL' })}
          />
          <PersonButton
            icon="👩🏻‍🦳"
            label="여성이"
            selected={filterOption.targetType === 'FEMALE'}
            onClick={() => setFilterOption({ ...filterOption, targetType: 'FEMALE' })}
          />
          <PersonButton
            icon="👨🏻‍🦳"
            label="남성이"
            selected={filterOption.targetType === 'MALE'}
            onClick={() => setFilterOption({ ...filterOption, targetType: 'MALE' })}
          />
          <PersonButton
            icon="👦🏻"
            label="청소년이"
            selected={filterOption.targetType === 'TEEN'}
            onClick={() => setFilterOption({ ...filterOption, targetType: 'TEEN' })}
          />
        </PersonButtons>
        <RankTypeButtons>
          <RankTypeButton
            label="받고 싶어한"
            selected={filterOption.rankType === 'MANY_WISH'}
            onClick={() => setFilterOption({ ...filterOption, rankType: 'MANY_WISH' })}
          />
          <RankTypeButton
            label="많이 선물한"
            selected={filterOption.rankType === 'MANY_RECEIVE'}
            onClick={() => setFilterOption({ ...filterOption, rankType: 'MANY_RECEIVE' })}
          />
          <RankTypeButton
            label="위시로 받은"
            selected={filterOption.rankType === 'MANY_WISH_RECEIVE'}
            onClick={() => setFilterOption({ ...filterOption, rankType: 'MANY_WISH_RECEIVE' })}
          />
        </RankTypeButtons>
      </Wrapper>
    
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;
const RankTypeButtons = styled.div`
  display: flex;
  justify-content: space-around;
  background-color:#e6f1ff;
  border-radius: 20px;
  `;
const PersonButtons = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
`;

export default Filter;
