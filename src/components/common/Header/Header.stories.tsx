import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Header } from './Header';

const meta = {
  title: 'Common/Header/Default',
  tags: ['autodocs'],
  render: (props) => (
    <MemoryRouter>
      <Header {...props} />
    </MemoryRouter>
  ),
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '/login',
    title: '선물하기',
    description: '로그인',
    backgroundColor: '#FFF',
  },
};
