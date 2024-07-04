import Icon from "@/components/common/GoodsItem/Icon";
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
    // TODO: 링크 상수화
    <Link to={`/theme/${themeKey}`}>
      <Icon imageSrc={imageSrc} text={categoryName} />
    </Link>
  );
};

export default CategoryItem;
