import type { Meta, StoryObj } from '@storybook/react';

import { DEFAULT_IMAGE_URL } from '@/constants/data';

import { RankingGoodsItem } from '@/components/ui/GoodsItem/RankingGoodsItem';

const meta: Meta<typeof RankingGoodsItem> = {
  title: 'Example/GoodsItem/RankingGoodsItem',
  component: RankingGoodsItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rank: {
      control: 'number',
      min: 1,
      max: 100,
    },
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
type Story = StoryObj<typeof RankingGoodsItem>;

export const Default: Story = {
  args: {
    rank: 1,
    imageSrc: DEFAULT_IMAGE_URL,
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: '100000000000',
  },
};
