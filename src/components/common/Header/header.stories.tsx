import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './header';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Header',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  render: () => <Header />,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
