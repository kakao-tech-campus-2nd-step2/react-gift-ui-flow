import type { Meta, StoryObj } from '@storybook/react';
import DefaultGoodsItem from './DefaultGoodsItem';

const meta: Meta<typeof DefaultGoodsItem> = {
  component: DefaultGoodsItem,
};

export default meta;

type DefaultGoodsStory = StoryObj<typeof DefaultGoodsItem>;

export const GoodsItemWithTestImage: DefaultGoodsStory = {
  args: {
    imageSrc:
      'https://raw.githubusercontent.com/cla6shade/Cla6Shade/master/banner.png',
    subtitle: '세일중 엄청나게커다란모기가나의발을',
    title:
      '엄청나게 커다란모기가 나의 발을물었어 간지러웠어 그래서참았어 아무생각없이 나는 발을긁었어',
    amount: 1000000000000000000,
  },
};
