import { Meta, StoryObj } from '@storybook/react';
import Target from '.';

const meta: Meta<typeof Target> = {
  title: 'components/Filter/Target/Default',
  component: Target,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Target>;

export const Default: Story = {};
