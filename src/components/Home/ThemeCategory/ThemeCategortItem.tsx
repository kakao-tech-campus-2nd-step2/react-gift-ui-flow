import styled from '@emotion/styled';

import { Image } from '@/components/common/Image';

export interface IThemeCategoryItem {
  src: string;
  title: string;
}
export const ThemeCategoryItem = ({ src, title }: IThemeCategoryItem) => {
  return (
    <ThemeItemWrapper>
      <ImageCustom radius={22} ratio={'square'} src={src} alt={title} />
      <p>{title}</p>
    </ThemeItemWrapper>
  );
};
const ThemeItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  cursor: pointer;
`;
const ImageCustom = styled(Image)`
  width: 80px;
`;
