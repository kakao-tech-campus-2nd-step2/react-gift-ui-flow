import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { DefaultHeader } from './Default';

const meta = {
  title: 'Common/Header/Default',
  tags: ['autodocs'],
  render: (props) => (
    <MemoryRouter>
      <DefaultHeader {...props} />
    </MemoryRouter>
  ),
} satisfies Meta<typeof DefaultHeader>;

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
