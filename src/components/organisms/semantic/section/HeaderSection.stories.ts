import type { Meta, StoryObj } from '@storybook/react';
import HeaderSection from './HeaderSection';

const meta: Meta<typeof HeaderSection> = {
  component: HeaderSection,
};

export default meta;

type Story = StoryObj<typeof HeaderSection>;

export const DefaultFooter: Story = {
  args: {
    themeKey: '가벼운선물',
  },
};
