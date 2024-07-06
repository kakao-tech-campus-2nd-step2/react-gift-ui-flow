import styled from '@emotion/styled';
import { BREAKPOINT_SM } from '@styles/size';

const ResponsiveThemeSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 45px 52px 23px;
  @media (max-width: ${BREAKPOINT_SM}) {
    padding: 14px 14px 3px;
  }
`;

export default ResponsiveThemeSection;
