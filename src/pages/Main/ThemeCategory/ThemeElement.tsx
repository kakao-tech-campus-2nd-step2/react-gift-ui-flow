import styled from "@emotion/styled";

import { Image } from "@/components/common/Image";
import { breakpoints } from "@/styles/variants";

type Props = {
  src: string;
  title: string;
  themeKey: string;
} & React.HTMLAttributes<HTMLDivElement>;

const ThemeElement: React.FC<Props> = ({ src, title, themeKey }: Props) => {
  const handleClick = () => {
    location.href = "/theme/" + themeKey;
  };

  return (
    <Wrapper>
      <InnerWrapper onClick={handleClick}>
        <StyledImg src={src} ratio="square" />
        <StyledP>{title}</StyledP>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ThemeElement;

const Wrapper = styled.div`
  width: initial;
  cursor: pointer;
  padding: 25px 35px 24px;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 13px 0px 12px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled(Image)`
  width: 90px;
  border-radius: 32px;
  margin: 0 auto;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 50px;
    border-radius: 18px;
  }
`;

const StyledP = styled.p`
  padding-top: 7px;
  font-size: 16px;
  line-height: 28px;
  color: rgb(51, 51, 51);

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 13px;
    padding-top: 5px;
  }
`;
