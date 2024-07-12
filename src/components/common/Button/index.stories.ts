import Button, { ButtonProps } from '@components/common/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ButtonProps> = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select', options: ['kakao', 'primary', 'darkGray'] },
    },
    size: {
      control: { type: 'select', options: ['small', 'large', 'responsive'] },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Kakao: Story = {
  args: {
    children: '버튼 텍스트',
    theme: 'kakao',
    size: 'large',
  },
};

export const Primary: Story = {
  args: {
    children: '버튼 텍스트',
    theme: 'primary',
    size: 'large',
  },
};

export const DarkGray: Story = {
  args: {
    children: '버튼 텍스트',
    theme: 'darkGray',
    size: 'large',
  },
};
