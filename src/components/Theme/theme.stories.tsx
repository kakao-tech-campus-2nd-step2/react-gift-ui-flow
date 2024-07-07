import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from './theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Theme',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  render: () => <Theme />,
} satisfies Meta<typeof Theme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
