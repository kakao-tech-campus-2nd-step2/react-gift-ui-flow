import { Meta, StoryObj } from '@storybook/react';
import GoodsItem, { GoodsItemProps } from '@components/common/GoodsItem';

const meta: Meta<GoodsItemProps> = {
  title: 'common/GoodsItem/Ranking',
  component: GoodsItem,
  tags: ['autodocs'],
  argTypes: {
    rankingIndex: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
};

export default meta;

type Story = StoryObj<GoodsItemProps>;

export const Default: Story = {
  args: {
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '부제목',
    title: '상품 제목',
    amount: 10000,
    rankingIndex: 1,
  },
};
