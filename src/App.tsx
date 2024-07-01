import styled from '@emotion/styled';

import { RoutesPage } from './components/Routes';

const App = () => {
  const name = 'Josh Perez';

  return (
    <div>
      <RoutesPage />
      <Title>Hello, {name}</Title>
    </div>
  );
};

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  color: gray;
`;
