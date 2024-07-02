import { Meta, StoryObj } from '@storybook/react';
import theme from '@assets/images/theme.jpeg';
import ThemeItem, { ThemeItemProps } from '.';

const meta: Meta<ThemeItemProps> = {
  title: 'components/ThemeCategory/ThemeItem',
  component: ThemeItem,
  tags: ['autodocs'],
  argTypes: {
    image: { control: 'text' },
    name: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ThemeItemProps>;

export const Default: Story = {
  args: {
    image: theme,
    name: '스몰럭셔리',
  },
};
