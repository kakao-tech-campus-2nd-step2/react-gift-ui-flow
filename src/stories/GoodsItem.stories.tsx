import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DefaultGoodsItem from '../components/GoodsItem/DefaultGoodsItem';
import RankingGoodsItem from '../components/GoodsItem/RankingGoodsItem';

// DefaultGoodsItem의 Meta 정의
const defaultMeta: Meta<typeof DefaultGoodsItem> = {
  title: 'Components/GoodsItem/Default',
  component: DefaultGoodsItem,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    imageSrc: { control: 'text' },
    subtitle: { control: 'text' },
    title: { control: 'text' },
    amount: { control: 'number' },
  },
};

export default defaultMeta;

type DefaultStory = StoryObj<typeof DefaultGoodsItem>;

export const Default: DefaultStory = {
  render: (args) => <DefaultGoodsItem {...args} />,
  args: {
    imageSrc:
      'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },
};

export const Ranking: StoryObj<typeof RankingGoodsItem> = {
  render: (args) => <RankingGoodsItem {...args} />,
  args: {
    imageSrc:
      'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
    rankingIndex: 1,
  },
};
