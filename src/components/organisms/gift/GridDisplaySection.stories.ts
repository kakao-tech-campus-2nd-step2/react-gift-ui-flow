import type { Meta, StoryObj } from '@storybook/react';
import { Gift } from '@dto/Gift';
import GiftDisplaySection from './GiftDisplaySection';

const meta: Meta<typeof GiftDisplaySection> = {
  component: GiftDisplaySection,
};

export default meta;

type DefaultGoodsStory = StoryObj<typeof GiftDisplaySection>;

const testGifts: Gift[] = [];

for (let i = 0; i < 16; i += 1) {
  testGifts.push({
    imageSrc:
      'https://picsum.photos/300',
    subtitle: '이건 선물일까 그냥 이미지일까?',
    title:
      '선물 테스트',
    amount: 100000,
  });
}

export const GiftDisplaySectionWithTestImage: DefaultGoodsStory = {
  args: {
    gifts: testGifts,
    indexed: true,
    maxColumns: 4,
  },
};
