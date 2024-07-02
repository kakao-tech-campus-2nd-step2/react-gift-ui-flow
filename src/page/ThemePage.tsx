import styled from '@emotion/styled';

const ThemePage = () => {
  const name = 'Josh Perez';

  return (
    <div>
      <Title>Hello, {name}. This is ThemePage.</Title>
    </div>
  );
};

export default ThemePage;

const Title = styled.h1`
  font-size: 1.5em;
  color: gray;
`;
