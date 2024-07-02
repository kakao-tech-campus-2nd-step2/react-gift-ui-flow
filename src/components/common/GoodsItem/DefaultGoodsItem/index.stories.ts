import type { Meta, StoryObj } from '@storybook/react/*';

import DefaultGoodsItem from './index';

const meta = {
  title: 'Example/GoodsItem/Default',
  component: DefaultGoodsItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: { type: 'text' },
    },
    subTitle: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    amount: {
      control: { type: 'number' },
    },
  },
  args: {
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subTitle: '카카오 프렌즈 한정판',
    title: '프렌즈 라이언 피규어',
    amount: 100,
  },
} satisfies Meta<typeof DefaultGoodsItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subTitle: '카카오 프렌즈 한정판',
    title: '프렌즈 라이언 피규어',
    amount: 100,
  },
};
