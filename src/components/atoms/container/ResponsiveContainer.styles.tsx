import { css } from '@emotion/react';
import {
  BREAKPOINT_XS,
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
} from '@styles/size';
import styled from '@emotion/styled';
import { ResponsiveContainerProps } from '@/types';
import { getSizeStyles } from '@/utils';

const BreakpointContainer = styled.div<ResponsiveContainerProps>`
  ${(props) => getSizeStyles(props.sizeDefault)}
  
  ${(props) => props.sizeXS && css`
    @media (max-width: ${BREAKPOINT_XS}) {
      ${getSizeStyles(props.sizeXS)}
    }
  `}

  ${(props) => props.sizeSm && css`
    @media (max-width: ${BREAKPOINT_SM}) {
      ${getSizeStyles(props.sizeSm)}
    }
  `}

  ${(props) => props.sizeMd && css`
    @media (max-width: ${BREAKPOINT_MD}) {
      ${getSizeStyles(props.sizeMd)}
    }
  `}

  ${(props) => props.sizeLg && css`
    @media (max-width: ${BREAKPOINT_LG}) {
      ${getSizeStyles(props.sizeLg)}
    }
  `}
`;

export default BreakpointContainer;
