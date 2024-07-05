import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/ui/Input';

const meta: Meta<typeof Input> = {
  title: 'Example/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    invalid: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'large', 'response'],
    },
  },
  args: { placeholder: 'placeholder' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
