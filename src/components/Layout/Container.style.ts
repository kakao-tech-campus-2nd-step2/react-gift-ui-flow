import styled from '@emotion/styled';

interface ContainerProps {
  width?: string;
  maxWidth?: string;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  padding?: string;
}

export const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  padding: ${({ padding }) => padding || '0'};
  margin: 0 auto;
`;
