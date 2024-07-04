import { Meta, StoryObj } from '@storybook/react';

import SectionHeader, { SectionHeaderProps } from '.';

const meta: Meta<SectionHeaderProps> = {
  title: 'common/SectionHeader/Default',
  component: SectionHeader,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    color: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<SectionHeaderProps>;

export const Default: Story = {
  args: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    color: '#4b4d40',
  },
};
