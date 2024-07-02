import type { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';

const meta: Meta<typeof Banner> = {
  component: Banner,
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const DefaultFooter: Story = {
  args: {
    themeKey: '가벼운선물',
  },
};
