import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
  title: 'Common/Footer',
  tags: ['autodocs'],
  render: () => (
    <div>
      <Footer />
    </div>
  ),
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
