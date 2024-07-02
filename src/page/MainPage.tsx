import styled from '@emotion/styled';

const MainPage = () => {
  const name = 'Josh Perez';

  return (
    <div>
      <Title>Hello, {name}. This is main page.</Title>
    </div>
  );
};

export default MainPage;

const Title = styled.h1`
  font-size: 1.5em;
  color: gray;
`;
