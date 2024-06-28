import { Meta, StoryObj } from '@storybook/react';
import { GoodsItem, GoodsItemProps } from './GoodsItem';

export default {
  title: 'Components/GoodsItem',
  component: GoodsItem,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    imageSrc: { control: 'text' },
    amount: { control: 'number' },
    isRanking: { control: 'boolean' },
    ranking: { control: 'number' },
  },
} as Meta;

type Story = StoryObj<GoodsItemProps>;

export const Default: Story = {
  args: {
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    subtitle: '카카오 프렌즈 특별 한정판',
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    amount: 20000,
  },
};

export const Ranking: Story = {
  args: {
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    subtitle: '카카오 프렌즈 특별 한정판',
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    amount: 10000,
    isRanking: true,
    ranking: 1,
  },
};

export {};