import styled from '@emotion/styled';

export interface IContainer extends React.ComponentProps<'div'> {
  maxWidth?: `${string}px`;
  children: React.ReactNode;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
}

export const Container = ({
  flexDirection = 'row',
  justifyContent,
  alignItems,
  children,
  maxWidth,
  ...rest
}: IContainer) => {
  return (
    <StyleContainer {...rest}>
      <Inner
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        maxWidth={maxWidth}
        {...rest}
      >
        {children}
      </Inner>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Inner = styled.div<Pick<IContainer, 'maxWidth' | 'flexDirection' | 'justifyContent' | 'alignItems'>>`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
