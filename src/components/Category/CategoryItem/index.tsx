import { Image } from "@/components/common/Image";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface CategoryItemProps {
  categoryName: string;
  imageSrc: string;
  themeKey: string;
}
const CategoryItem = ({
  categoryName,
  imageSrc,
  themeKey,
}: CategoryItemProps) => {
  return (
    <Link to={`/theme/${themeKey}`}>
      <StyledCategoryItem>
        <Image
          src={imageSrc}
          alt="카테고리 소개"
          width="80"
          ratio="square"
          radius={25}
        />
        <p>{categoryName}</p>
      </StyledCategoryItem>
    </Link>
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
