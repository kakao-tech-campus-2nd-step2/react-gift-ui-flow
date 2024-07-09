import { Meta, StoryObj } from '@storybook/react';
import Filter from '.';

const meta: Meta<typeof Filter> = {
  title: 'components/home/Filter/Default',
  component: Filter,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {};
