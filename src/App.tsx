import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@styles/resetStyles';
import Layout from '@components/Layout/Layout';

const App = () => (
  <>
    <Global styles={resetStyles} />
    <Layout>
      <div className="App">Hello World!</div>
    </Layout>
  </>
);

export default App;
