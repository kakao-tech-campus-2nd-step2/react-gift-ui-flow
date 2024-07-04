import styled from '@emotion/styled';
import { BREAKPOINT_SM } from '@styles/size';

export const BannerTitle = styled.h1`
  font-size: 28px;
  padding-left: 16px;
  @media (max-width: ${BREAKPOINT_SM}) {
    font-size: 17px;
  }
`;

export const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
  @media (max-width: ${BREAKPOINT_SM}) {
    width: 40px;
    height: 40px;
  }
`;
