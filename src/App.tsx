import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';

const App = () => (
  <>
    <Global styles={resetStyles} />
    <div className="App">Hello World!</div>
  </>
);

export default App;
