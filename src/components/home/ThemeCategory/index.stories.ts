import { Meta, StoryObj } from '@storybook/react';
import ThemeCategory from '.';

const meta: Meta<typeof ThemeCategory> = {
  title: 'components/home/ThemeCategory/Default',
  component: ThemeCategory,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ThemeCategory>;

export const Default: Story = {};
