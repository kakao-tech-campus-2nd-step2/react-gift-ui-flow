import { GoodsItem, IGoodsItem } from '@/components/GoodsItem';
import { StoryFn, Meta } from '@storybook/react';

export default {
  component: GoodsItem,
  title: 'GoodsItem',
} as Meta;

const Template: StoryFn<IGoodsItem> = (args) => <GoodsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
  subtitle: '카카오 프렌즈 특별 한정판',
  title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
  subtitle: 'circle',
  title: 'auto',
  amount: 10000,
  rankingIndex: 1,
};
