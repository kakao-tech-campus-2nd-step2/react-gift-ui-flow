import type { Meta, StoryObj } from '@storybook/react';

import { UnderlineTextField } from './UnderlineTextField';

const meta = {
  title: 'Common/Form/Input/UnderlineTextField',
  tags: ['autodocs'],
  component: UnderlineTextField,
  args: {
    placeholder: 'placeholder',
    disabled: false,
    invalid: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'small', 'responsive'],
        default: 'responsive',
      },
    },
  },
} satisfies Meta<typeof UnderlineTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
