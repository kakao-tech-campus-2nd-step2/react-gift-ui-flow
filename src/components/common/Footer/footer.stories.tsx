import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './footer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Footer',
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  render: () => <Footer />,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
