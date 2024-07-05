import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['kakao', 'outline', 'black', 'lightGray', 'darkGray'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'response'],
    },
  },
  args: {
    // eslint-disable-next-line no-alert
    onClick: () => alert('버튼 클릭'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    width: '8rem',
  },
};
