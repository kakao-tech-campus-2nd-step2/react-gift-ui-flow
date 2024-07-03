import RankGoodsItem from '@components/common/GoodsItem/RankGoodsItem';
import type { Meta, StoryObj } from '@storybook/react/*';

const meta = {
  title: 'Common/GoodsItem/RankGoodsItem',
  component: RankGoodsItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rankingIndex: {
      control: { type: 'number' },
    },
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
    rankingIndex: 1,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subTitle: '카카오 프렌즈 한정판',
    title: '프렌즈 라이언 피규어',
    amount: 100,
  },
} satisfies Meta<typeof RankGoodsItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Rank: Story = {
  args: {
    rankingIndex: 1,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subTitle: '카카오 프렌즈 한정판',
    title: '프렌즈 라이언 피규어',
    amount: 100,
  },
};
