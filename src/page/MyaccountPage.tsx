import styled from '@emotion/styled';

const MyaccountPage = () => {
  const name = 'Josh Perez';

  return (
    <div>
      <Title>Hello, {name}. This is MyaccountPage.</Title>
    </div>
  );
};

export default MyaccountPage;

const Title = styled.h1`
  font-size: 1.5em;
  color: gray;
`;
