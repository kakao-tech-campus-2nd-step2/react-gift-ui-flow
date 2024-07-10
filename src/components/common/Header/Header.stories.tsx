import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

// Storybook 메타데이터 설정
const meta = {
  title: 'Common/Header',
  component: Header,
  args: {
    isLoggedIn: false, // 기본 로그인 상태를 false로 설정
  },
  argTypes: {
    isLoggedIn: {
      control: {
        type: 'boolean', // boolean 타입의 컨트롤 추가
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// 로그인 상태가 false일 때의 스토리
export const LoggedOut: Story = {
  args: {
    isLoggedIn: false,
  },
};

// 로그인 상태가 true일 때의 스토리
export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
  },
};
