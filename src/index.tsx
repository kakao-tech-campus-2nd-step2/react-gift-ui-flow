import '@/styles';

import ReactDOM from 'react-dom/client';

import App from '@/App';
import { globalStyle } from '@/styles/globalStyles';
import { Global } from '@emotion/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <Global styles={globalStyle} />
    <App />
  </>,
);
