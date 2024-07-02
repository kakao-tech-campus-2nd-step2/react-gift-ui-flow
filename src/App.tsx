import { Button } from './components/common/Button';
import styled from '@emotion/styled';
import Header from './components/common/Header/Header';

const App = () => {
  const name = 'Josh Perez';

  return (
    <div>
      <Header></Header>
      <Title>Hello, {name}</Title>
      <Button theme="kakao">버튼</Button>
    </div>
  );
};

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  color: gray;
`;
