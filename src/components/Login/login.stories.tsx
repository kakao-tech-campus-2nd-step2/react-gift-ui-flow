import type { Meta, StoryObj } from '@storybook/react';

import { Login } from './login';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Login',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  render: () => <Login />,
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
