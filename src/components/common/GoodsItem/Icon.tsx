import styled from "@emotion/styled";
import { Image } from "../Image";

interface IconProps {
  imageSrc?: string;
  text: string;
  children?: React.ReactNode;
}

//TODO: 이미지가 없을 경우에 대한 처리
const Icon = ({ imageSrc, text, children }: IconProps) => {
  return (
    <StyledCategoryItem>
      {!children && (
        <Image
          src={imageSrc}
          alt="카테고리 소개"
          width="80"
          ratio="square"
          radius={25}
        />
      )}
      {children}
      <p>{text}</p>
    </StyledCategoryItem>
  );
};

const StyledCategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 0 10px;
  p {
    color: inherit;
  }
`;

export default Icon;
