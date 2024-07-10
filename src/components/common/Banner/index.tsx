import styled from "@emotion/styled";
import { Container } from "../layouts/Container";

interface BannerProps {
  backgroundColor: string;
  children: React.ReactNode | React.ReactNode[];
}
const Banner = ({ backgroundColor, children }: BannerProps) => {
  return (
    <StyledBanner $backgroundColor={backgroundColor}>
      <Container>{children}</Container>
    </StyledBanner>
  );
};

interface StyledBannerProps {
  $backgroundColor: string;
}
const StyledBanner = styled.div<StyledBannerProps>`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.$backgroundColor};
`;

export default Banner;
