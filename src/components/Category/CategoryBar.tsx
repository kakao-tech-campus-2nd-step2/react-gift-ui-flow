import styled from '@emotion/styled';
import React from 'react';

import CategoryButton from './CategoryButton';
import SubCategoryButton from './SubCategoryButton';

const categories = [
  { label: 'ALL', subLabel: '전체' },
  { label: '여성', subLabel: '여성이' },
  { label: '남성', subLabel: '남성이' },
  { label: '청소년', subLabel: '청소년이' },
];

const subCategories = ['받고 싶어한', '많이 선물한', '위시로 받은'];

type FilterCategory = '전체' | '여성이' | '남성이' | '청소년이';
type FilterSubCategory = '받고 싶어한' | '많이 선물한' | '위시로 받은';

type CategoryBarProps = {
  selectedCategory: FilterCategory;
  setSelectedCategory: React.Dispatch<React.SetStateAction<FilterCategory>>;
  selectedSubCategory: FilterSubCategory;
  setSelectedSubCategory: React.Dispatch<React.SetStateAction<FilterSubCategory>>;
};

const CategoryBar: React.FC<CategoryBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
}) => {
  return (
    <Wrapper>
      <ButtonGroup>
        {categories.map((category) => (
          <CategoryButton
            key={category.label}
            label={category.label}
            subLabel={category.subLabel}
            active={category.subLabel === selectedCategory}
            onClick={() => setSelectedCategory(category.subLabel as FilterCategory)}
          />
        ))}
      </ButtonGroup>
      <SubCategoryBar>
        {subCategories.map((subCategory) => (
          <SubCategoryButton
            key={subCategory}
            label={subCategory}
            active={subCategory === selectedSubCategory}
            onClick={() => setSelectedSubCategory(subCategory as FilterSubCategory)}
          />
        ))}
      </SubCategoryBar>
    </Wrapper>
  );
};

export default CategoryBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  max-width: 800px;
  margin-bottom: 10px;
`;

const SubCategoryBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  max-width: 800px;
  background-color: #e6f7ff;
  border-radius: 10px;
  padding: 10px;
`;
