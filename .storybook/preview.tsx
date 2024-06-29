import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/styles/GlobalStyle';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => {
      return (
        <GlobalStyle>
          <Story />
        </GlobalStyle>
      );
    },
  ],
};

export default preview;
