import styled from '@emotion/styled';

import { TargetTypeButton } from './TargetTypeButton';
import { RankTypeButton } from './RankTypeButton';

export const GoodsRankingFilter = () => {
  return (
    <StyledGoodsRankingFilter>
      <TargetTypeContainer>
        <TargetTypeButton value="ALL" selected={true} />
        <TargetTypeButton value="FEMALE" selected={false} />
        <TargetTypeButton value="MALE" selected={false} />
        <TargetTypeButton value="TEEN" selected={false} />
      </TargetTypeContainer>
      <div
        style={{
          width: '100%',
          backgroundColor: 'inherit',
          height: '16px',
        }}
      />
      <RankTypeContainer>
        <RankTypeButton
          label="받고 싶어한"
          // value="MANY_WISH"
          selected={true}
        />
        <RankTypeButton
          label="많이 선물한"
          // value="MANY_RECEIVED"
          selected={false}
        />
        <RankTypeButton
          label="위시로 받은"
          // value="MANY_WISH_RECEIVED"
          selected={false}
        />
      </RankTypeContainer>
    </StyledGoodsRankingFilter>
  );
};

const StyledGoodsRankingFilter = styled.div`
  width: 100%;
  padding: 20px 0 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TargetTypeContainer = styled.div`
  display: flex;
`;

const RankTypeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: #e6f1ff;
  border-radius: 8px;
`;
