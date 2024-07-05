import styled from '@emotion/styled';
import { Spacing } from '@/components/common/layouts/Spacing';

type RankingFilterOption = {
  targetType: 'ALL' | 'FEMALE' | 'MALE' | 'TEEN';
  rankType: 'MANY_WISH' | 'MANY_RECEIVE' | 'MANY_WISH_RECEIVE';
};

type Props = {
  filterOption: RankingFilterOption;
  onFilterOptionChange: (option: RankingFilterOption) => void;
};

const GoodsRankingFilter = ({ filterOption, onFilterOptionChange }: Props) => {
  const handleFilterOption = (
    key: keyof RankingFilterOption,
    value: RankingFilterOption[keyof RankingFilterOption]
  ) => {
    onFilterOptionChange({
      ...filterOption,
      [key]: value,
    });
  };

  return (
    <Wrapper>
      <TargetTypeWrapper>
        <TargetTypeButton
          value="ALL"
          selected={filterOption.targetType === 'ALL'}
          onClick={(value) => handleFilterOption('targetType', value)}
        />
        <TargetTypeButton
          value="FEMALE"
          selected={filterOption.targetType === 'FEMALE'}
          onClick={(value) => handleFilterOption('targetType', value)}
        />
        <TargetTypeButton
          value="MALE"
          selected={filterOption.targetType === 'MALE'}
          onClick={(value) => handleFilterOption('targetType', value)}
        />
        <TargetTypeButton
          value="TEEN"
          selected={filterOption.targetType === 'TEEN'}
          onClick={(value) => handleFilterOption('targetType', value)}
        />
      </TargetTypeWrapper>
      <Spacing height={16} />
      <RankTypeWrapper>
        <RankTypeButton
          label="받고 싶어한"
          value="MANY_WISH"
          selected={filterOption.rankType === 'MANY_WISH'}
          onClick={(value) => handleFilterOption('rankType', value)}
        />
        <RankTypeButton
          label="많이 선물한"
          value="MANY_RECEIVE"
          selected={filterOption.rankType === 'MANY_RECEIVE'}
          onClick={(value) => handleFilterOption('rankType', value)}
        />
        <RankTypeButton
          label="위시로 받은"
          value="MANY_WISH_RECEIVE"
          selected={filterOption.rankType === 'MANY_WISH_RECEIVE'}
          onClick={(value) => handleFilterOption('rankType', value)}
        />
      </RankTypeWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TargetTypeWrapper = styled.div`
  display: flex;
`;

const RankTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: #e6f1ff;
  border-radius: 8px;
  box-sizing: border-box;
`;

const TargetTypeButton = ({
  value,
  selected,
  onClick,
}: {
  value: RankingFilterOption['targetType'];
  selected: boolean;
  onClick: (value: RankingFilterOption['targetType']) => void;
}) => (
  <ButtonWrapper onClick={() => onClick(value)}>
    <Icon selected={selected}>{TARGET_TYPE_TEXT[value].icon}</Icon>
    <Label selected={selected}>{TARGET_TYPE_TEXT[value].label}</Label>
  </ButtonWrapper>
);

const RankTypeButton = ({
  label,
  value,
  selected,
  onClick,
}: {
  label: string;
  value: RankingFilterOption['rankType'];
  selected: boolean;
  onClick: (value: RankingFilterOption['rankType']) => void;
}) => (
  <RankButtonWrapper selected={selected} onClick={() => onClick(value)}>
    {label}
  </RankButtonWrapper>
);

const TARGET_TYPE_TEXT = {
  ALL: {
    icon: 'ALL',
    label: '전체',
  },
  FEMALE: {
    icon: '👩🏻‍🦳',
    label: '여성이',
  },
  MALE: {
    icon: '👨🏻‍🦳',
    label: '남성이',
  },
  TEEN: {
    icon: '👦🏻',
    label: '청소년이',
  },
};

const ButtonWrapper = styled.button`
  width: 100%;
  min-width: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 16px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ selected }) => (selected ? '#4684e9' : '#e6f1ff')};
  transition: background-color 200ms;
`;

const Label = styled.p<{ selected: boolean }>`
  padding: 5px 0;
  font-size: 14px;
  line-height: 16px;
  color: ${({ selected }) => (selected ? '#4684e9' : '#666')};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  transition: color 200ms, font-weight 200ms;
`;

const RankButtonWrapper = styled.button<{ selected: boolean }>`
  padding: 13px 20px;
  font-size: 16px;
  line-height: 16px;
  color: ${({ selected }) => (selected ? '#4684e9' : 'rgba(70, 132, 233, 0.7)')};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  transition: color 200ms, font-weight 200ms;
  &:focus {
    outline: none;
  }
`;

export { GoodsRankingFilter };
