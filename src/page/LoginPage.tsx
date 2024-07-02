import styled from '@emotion/styled';
import React from 'react';

const LoginPage: React.FC = () => {
  const name = 'Josh Perez';

  return (
    <div>
      <Title>Hello, {name}. This is Login Page.</Title>
    </div>
  );
};

export default LoginPage;

const Title = styled.h1`
  font-size: 1.5em;
  color: gray;
`;
