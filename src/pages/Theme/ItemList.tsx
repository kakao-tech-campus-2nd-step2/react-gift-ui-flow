import styled from "@emotion/styled";
import React from "react";

import { DefaultGoodsItems } from "@/components/common/GoodsItem/Default";
import { Grid } from "@/components/common/layouts/Grid";
import { breakpoints } from "@/styles/variants";

type ItemType = {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
};

type Prop = {
  children: Array<ItemType>;
};

const ItemList: React.FC<Prop> = ({ children }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <StyledGrid
          columns={{
            initial: 2,
            xs: 2,
            sm: 2,
            md: 4,
            lg: 4,
          }}
        >
          {children.map((element, index) => (
            <DefaultGoodsItems
              imageSrc={element.imageSrc}
              subtitle={element.subtitle}
              title={element.title}
              amount={element.amount}
              key={index}
            />
          ))}
        </StyledGrid>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ItemList;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 16px 360px;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 28px 16px 180px;
  }
`;

const InnerWrapper = styled.div`
  width: 1024px;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const StyledGrid = styled(Grid)`
  gap: 16px;
`;
