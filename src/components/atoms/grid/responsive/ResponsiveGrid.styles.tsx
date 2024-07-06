import styled from '@emotion/styled';
import {
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XS,
} from '@styles/size';
import { css } from '@emotion/react';
import { BreakpointGridProps } from '@/types';

const BreakpointGrid = styled.div<BreakpointGridProps>`
  display: grid;
  grid-template-columns: ${({ columnsDefault }) => `repeat(${columnsDefault}, 1fr)`};
  gap: ${({ gap }) => gap || 0}px;
  width: 100%;

  ${({ columnsXS }) => columnsXS && css`
    @media (max-width: ${BREAKPOINT_XS}) {
      grid-template-columns: repeat(${columnsXS}, 1fr);
    }
  `}

  ${({ columnsSm }) => columnsSm && css`
    @media (max-width: ${BREAKPOINT_SM}) {
      grid-template-columns: repeat(${columnsSm}, 1fr);
    }
  `}

  ${({ columnsMd }) => columnsMd && css`
    @media (max-width: ${BREAKPOINT_MD}) {
      grid-template-columns: repeat(${columnsMd}, 1fr);
    }
  `}

  ${({ columnsLg }) => columnsLg && css`
    @media (max-width: ${BREAKPOINT_LG}) {
      grid-template-columns: repeat(${columnsLg}, 1fr);
    }
  `}
`;

// eslint-disable-next-line import/prefer-default-export
export { BreakpointGrid };
