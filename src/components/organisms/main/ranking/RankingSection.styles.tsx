import styled from '@emotion/styled';
import { BREAKPOINT_SM } from '@styles/size';

// eslint-disable-next-line import/prefer-default-export
export const RankingSectionTitle = styled.h1`
  font-size: 35px;
  line-height: 50px;
  font-weight: bold;
  @media (max-width: ${BREAKPOINT_SM}) {
    font-size: 20px;
  }
`;
