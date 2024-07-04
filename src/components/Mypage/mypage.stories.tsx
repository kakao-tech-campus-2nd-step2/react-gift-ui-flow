import type { Meta, StoryObj } from '@storybook/react';

import { Mypage } from './mypage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Mypage',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  render: () => <Mypage />,
} satisfies Meta<typeof Mypage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
