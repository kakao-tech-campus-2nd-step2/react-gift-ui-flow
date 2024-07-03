import { Image } from "@/components/common/Image";
import IMAGE from "@/constants/Image";
import styled from "@emotion/styled";

interface CategoryItemProps {
  categoryName: string;
}
const CategoryItem = ({ categoryName }: CategoryItemProps) => {
  return (
    <StyledCategoryItem>
      <Image
        src={IMAGE.DEFAULT_CATEGORY}
        alt="카테고리 소개"
        width="80"
        ratio="square"
        radius={25}
      />
      <p>{categoryName}</p>
    </StyledCategoryItem>
  );
};

const StyledCategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 0 10px;
`;

export default CategoryItem;
