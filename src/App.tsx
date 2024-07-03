import '@/styles/reset.css';

import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/organisms/Header';

const App = () => {
  const name = 'Josh Perez';

  return (
    <>
      <Header />
      <Title>Hello, {name}</Title>
      <Outlet />
    </>
  );
};

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  color: gray;
`;
