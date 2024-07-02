import React from 'react';
import { Global } from '@emotion/react';
import resetStyles from '@/assets/styles/resetStyles';

function App() {
  return (
    <main>
      <Global styles={resetStyles} />
    </main>
  );
}

export default App;
