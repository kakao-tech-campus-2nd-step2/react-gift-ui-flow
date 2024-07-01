import type { Meta, StoryObj } from '@storybook/react';

import { DEFAULT_IMAGE_URL } from '@/constants/data';

import { GoodsItem } from '@/components/ui/GoodsItem/GoodsItem';

const meta: Meta<typeof GoodsItem> = {
  title: 'Example/GoodsItem/Default',
  component: GoodsItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    amount: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GoodsItem>;

export const Default: Story = {
  args: {
    imageSrc: DEFAULT_IMAGE_URL,
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: '100000000000',
  },
};
