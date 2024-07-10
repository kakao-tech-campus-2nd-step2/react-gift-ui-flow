import Icon from "@/components/common/GoodsItem/Icon";
import { Category } from "@/constants/category";
import ROUTE_PATH from "@/constants/path";
import { Link } from "react-router-dom";

interface CategoryItemProps {
  categoryName: string;
  imageSrc: string;
  themeKey: Category["themeKey"];
}
const CategoryItem = ({
  categoryName,
  imageSrc,
  themeKey,
}: CategoryItemProps) => {
  return (
    <Link to={ROUTE_PATH.THEME_DETAIL(themeKey)}>
      <Icon imageSrc={imageSrc} text={categoryName} />
    </Link>
  );
};

export default CategoryItem;
