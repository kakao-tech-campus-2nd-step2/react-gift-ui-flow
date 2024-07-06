import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const KakaoResponsive: Story = {
  args: {
    theme: 'kakao',
    elementSize: 'responsive',
    text: 'Light Responsive',
  },
};

export const NaverResponsive: Story = {
  args: {
    theme: 'naver',
    elementSize: 'responsive',
    text: 'Dark Responsive',
  },
};

export const BlackBig: Story = {
  args: {
    theme: 'black',
    elementSize: 'big',
    text: 'Dark Fixed',
  },
};
