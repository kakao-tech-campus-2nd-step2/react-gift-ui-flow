import { Meta, StoryObj } from '@storybook/react';
import RankingList from '.';

const meta: Meta<typeof RankingList> = {
  title: 'features/Home/RankingList',
  component: RankingList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RankingList>;

export const Default: Story = {};
