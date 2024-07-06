import type { Meta, StoryObj } from '@storybook/react';
import GoodsItem from './GoodsItem';

const meta: Meta<typeof GoodsItem> = {
  component: GoodsItem,
};

export default meta;

type DefaultGoodsStory = StoryObj<typeof GoodsItem>;

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

export const GoodsItemWithRanking: DefaultGoodsStory = {
  args: {
    rankingIndex: 3,
    imageSrc:
      'https://raw.githubusercontent.com/cla6shade/Cla6Shade/master/banner.png',
    subtitle: '세일중 엄청나게커다란모기가나의발을',
    title:
      '엄청나게 커다란모기가 나의 발을물었어 간지러웠어 그래서참았어 아무생각없이 나는 발을긁었어',
    amount: 1000000000000000000,
  },
};
