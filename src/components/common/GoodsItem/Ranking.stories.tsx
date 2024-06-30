import type { Meta, StoryObj } from '@storybook/react';

import { RankingGoodsItems } from './Ranking';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/GoodsItem/Ranking',
  tags: ['autodocs'],
  render: (props) => (
    <div style={{ width: '160px' }}>
      <RankingGoodsItems {...props} />
    </div>
  ),
} satisfies Meta<typeof RankingGoodsItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rankingIndex: 1,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },
};
