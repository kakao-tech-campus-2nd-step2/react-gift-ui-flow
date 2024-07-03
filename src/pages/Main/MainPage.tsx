import styled from '@emotion/styled';

const MainPage = () => {
  const name = 'Yeji';

  return (
    <div>
      <Title>Hello, {name}</Title>
    </div>
  );
};

export default MainPage;

const Title = styled.h1`
  font-size: 1.5em;
  color: gray;
`;
