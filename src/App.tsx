import styled from '@emotion/styled';
import Header from './components/common/Header';

const App = () => {
  return (
    <AppContainer>
      <Header></Header>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  padding: 0 120px;
`;
