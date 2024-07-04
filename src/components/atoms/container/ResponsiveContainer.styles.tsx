import { css } from '@emotion/react';
import {
  BREAKPOINT_XS,
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
} from '@styles/size';
import styled from '@emotion/styled';
import { ContainerSize, ResponsiveContainerProps } from '@/types';

const getSizeStyles = (size?: ContainerSize) => {
  if (!size) return '';

  if (size === 'full-width') {
    return `
      width: 100%;
      height: auto;
    `;
  }

  return `
    width: ${size.width};
    height: ${size.height};
  `;
};

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
