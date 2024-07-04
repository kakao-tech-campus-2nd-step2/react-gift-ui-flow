import styled from "@emotion/styled";
import React from "react";

import { Grid } from "@/components/common/layouts/Grid";
import { breakpoints } from "@/styles/variants";

const CategoryElements = [
  { categoryName: "all", icon: "ALL", title: "전체" },
  { categoryName: "woman", icon: "👩🏻‍🦳", title: "여성이" },
  { categoryName: "man", icon: "👨🏻‍🦳", title: "남성이" },
  { categoryName: "teen", icon: "👦🏻", title: "청소년이" },
];

type Prop = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

type ElementProp = {
  icon: string;
  title: string;
  categoryName: string;
  isSelect?: boolean;
};

const CategoryFilter: React.FC<Prop> = ({ category, setCategory }) => {
  const CategoryElement: React.FC<ElementProp> = ({
    categoryName,
    icon,
    title,
    isSelect = false,
  }) => {
    const handleClick = () => {
      setCategory(categoryName);
    };

    return (
      <StyledDiv onClick={handleClick}>
        {isSelect ? <SelectIcon>{icon}</SelectIcon> : <Icon>{icon}</Icon>}
        {isSelect ? <SelectP>{title}</SelectP> : <StyledP>{title}</StyledP>}
      </StyledDiv>
    );
  };

  return (
    <Wrapper>
      <Grid columns={4}>
        {CategoryElements.map((element) => (
          <CategoryElement
            categoryName={element.categoryName}
            icon={element.icon}
            title={element.title}
            isSelect={category === element.categoryName}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};
export default CategoryFilter;

const Wrapper = styled.section`
  padding: 20px 0px 7px;
  width: 100%;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  font-weight: 700;
  transition: background-color 200ms ease 0s;

  background-color: rgb(230, 241, 255);

  width: 60px;
  height: 60px;
  border-radius: 24px;
  font-size: 20px;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 44px;
    height: 44px;
    border-radius: 16px;
    font-size: 14px;
  }
`;

const SelectIcon = styled(Icon)`
  background-color: rgb(70, 132, 233);
`;

const StyledP = styled.p`
  transition:
    color 200ms ease 0s,
    font-weight 200ms ease 0s;

  color: rgb(102, 102, 102);
  font-weight: 400;

  padding: 5px 0px;
  font-size: 14px;
  line-height: 16px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 10px 0px 6px;
    font-size: 20px;
    line-height: 24px;
  }
`;

const SelectP = styled(StyledP)`
  color: rgb(70, 132, 233);
  font-weight: 700;
`;
