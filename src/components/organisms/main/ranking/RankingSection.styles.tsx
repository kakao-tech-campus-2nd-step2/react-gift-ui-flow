import styled from '@emotion/styled';
import { BREAKPOINT_SM } from '@styles/size';

export const RankingSectionTitle = styled.h1`
  font-size: 35px;
  line-height: 50px;
  font-weight: bold;
  @media (max-width: ${BREAKPOINT_SM}) {
    font-size: 20px;
  }
`;

export const RankingSectionTitleContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${BREAKPOINT_SM}) {
    font-size: 20px;
    align-items: flex-start;
  }
`;
