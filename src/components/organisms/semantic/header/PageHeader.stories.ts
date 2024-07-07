import type { Meta, StoryObj } from '@storybook/react';
import PageHeader from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const DefaultHeader: Story = {
  args: {
    displayLogo: true,
  },
};
