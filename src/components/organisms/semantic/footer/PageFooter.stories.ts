import type { Meta, StoryObj } from '@storybook/react';
import PageFooter from './PageFooter';

const meta: Meta<typeof PageFooter> = {
  component: PageFooter,
};

export default meta;

type Story = StoryObj<typeof PageFooter>;

export const DefaultFooter: Story = {
  args: {},
};
