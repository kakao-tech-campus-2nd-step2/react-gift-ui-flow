import styled from '@emotion/styled';

import GiftImg from '@/assets/gitf_img.jpg';
import type { DefaultGoodsItemsProps } from '@/components/common/GoodsItem/Default';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';
import { useExpandableList } from '@/hooks/custom-hooks/useExpandableList';
import { breakpoints } from '@/styles/variants';

const GridContainer = styled.section`
  padding: 40px 0px 60px;
  display: block;
  unicode-bidi: isolate;
`;

const defaultGoodsProps: DefaultGoodsItemsProps = {
  imageSrc: GiftImg,
  subtitle: 'BBQ',
  title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  amount: 29000,
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;

  @media screen and (min-width: ${breakpoints.sm}) {
    height: 40px;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 480px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 200ms ease 0s;
  height: 40px;
  font-size: 15px;
  box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;
  color: rgb(17, 17, 17);

  @media screen and (min-width: ${breakpoints.sm}) {
    height: 60px;
  }
`;

const PopGiftList = ({
  genderFilter,
  giftFilter,
}: {
  genderFilter: string;
  giftFilter: string;
}) => {
  const applyGenderFilter = (props: DefaultGoodsItemsProps): boolean => {
    if (genderFilter === 'FEMALE') {
      return props.subtitle === 'BBQ';
    } else if (genderFilter === 'MALE') {
      return props.subtitle === 'BBQ';
    } else if (genderFilter === 'TEEN') {
      return props.subtitle === 'BBQ';
    } else {
      return true;
    }
  };

  const applyGiftFilter = (props: DefaultGoodsItemsProps): boolean => {
    if (giftFilter === 'WANT') {
      return props.amount == 29000;
    } else if (giftFilter === 'GIVEN') {
      return props.amount == 29000;
    } else if (giftFilter === 'WISHED') {
      return props.amount == 29000;
    } else {
      return true;
    }
  };

  const { isExpanded, listLength, toggleExpansion } = useExpandableList(6, 21);

  const filteredGoodsProps = { ...defaultGoodsProps };

  const rankingGoodsItems = Array.from({ length: listLength }, (_, index) => {
    const isVisible = applyGenderFilter(filteredGoodsProps) && applyGiftFilter(filteredGoodsProps);
    return isVisible ? (
      <RankingGoodsItems key={index} rankingIndex={index + 1} {...filteredGoodsProps} />
    ) : null;
  });

  return (
    <GridContainer>
      <Grid
        columns={{
          initial: 3,
          xs: 3,
          sm: 3,
          md: 4,
          lg: 6,
        }}
        gap={16}
      >
        {rankingGoodsItems}
      </Grid>

      <ButtonWrapper>
        <Button onClick={toggleExpansion}>{isExpanded ? '접기' : '더보기'}</Button>
      </ButtonWrapper>
    </GridContainer>
  );
};

export default PopGiftList;
