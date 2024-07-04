import type { Meta, StoryObj } from '@storybook/react';

import { Main } from './main';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Main',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  render: () => <Main />,
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
