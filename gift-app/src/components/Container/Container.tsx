import styled from '@emotion/styled';

const Container: React.FC = () => {
  return <StyledContainer>Hello World</StyledContainer>;
};

const StyledContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
`;

export default Container;