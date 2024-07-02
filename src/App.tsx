<<<<<<< HEAD
import styled from '@emotion/styled';

const App = () => {
  const name = 'Josh Perez';

  return (
    <div>
      <Title>Hello, {name}</Title>
    </div>
=======
import { ResetStyles } from './styles/reset';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <ResetStyles />
      <HomePage />
    </>
>>>>>>> feat-hyoeun/feat-hyoeun
  );
};

export default App;
<<<<<<< HEAD

const Title = styled.h1`
  font-size: 1.5em;
  color: gray;
`;
=======
>>>>>>> feat-hyoeun/feat-hyoeun
