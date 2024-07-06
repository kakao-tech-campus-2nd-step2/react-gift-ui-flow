import styled from '@emotion/styled';
import { useContext } from 'react';

import { ActionSpecificationButton } from '@/components/molecules/ActionSpecificationButton';
import { FlexItemsBox } from '@/components/molecules/FlexItemsBox';
import { GroupSpecificationButton } from '@/components/molecules/GroupSpecificationButton';
import { Heading2 } from '@/components/molecules/Heading2';
import { GiftActionButtons, GiftGroupButtons } from '@/contexts/GiftRankContext';

const hContent = `실시간 급상승 선물랭킹`;

export const GiftRankFilters = () => {
  const groupSpecificationButtons = useContext(GiftGroupButtons);
  const actionSpecificationButtons = useContext(GiftActionButtons);

  return (
    <Wrapper>
      <Heading2 hContent={hContent} />
      <GroupSpecificationFilter
        flexItems={groupSpecificationButtons}
        FlexItemComponent={GroupSpecificationButton}
      />
      <ActionSpecificationFilter
        flexItems={actionSpecificationButtons}
        FlexItemComponent={ActionSpecificationButton}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 100%;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;
`;

const GroupSpecificationFilter = styled(FlexItemsBox)`
  padding-top: 20px;
`;

const ActionSpecificationFilter = styled(FlexItemsBox)`
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: rgb(230, 241, 255);
  margin-top: 16px;
  padding-bottom: 7px;
`;
