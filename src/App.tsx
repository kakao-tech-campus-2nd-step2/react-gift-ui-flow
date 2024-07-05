import { css } from '@emotion/react';
import React from 'react';

import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';

const appStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const mainContentStyle = css`
  flex: 1;
`;

const App: React.FC = () => {
  return (
    <div css={appStyle}>
      <Header />
      <main css={mainContentStyle} />
      <Footer />
    </div>
  );
};

export default App;
