import styled from '@emotion/styled';

export interface IContainer {
  maxWidth?: string;
  children: React.ReactNode;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
}

export const Container = ({ flexDirection = 'row', justifyContent, alignItems, children, maxWidth }: IContainer) => {
  return (
    <StyleContainer
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      maxWidth={maxWidth}
    >
      {children}
    </StyleContainer>
  );
};

const StyleContainer = styled.div<IContainer>`
  max-width: ${(props) => props.maxWidth};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
