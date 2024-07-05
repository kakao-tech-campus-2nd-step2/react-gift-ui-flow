import { css } from '@emotion/react';
import type { Meta, StoryFn } from '@storybook/react';

import type { IButton } from '@/components/common/Button';
import { Button } from '@/components/common/Button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: StoryFn<IButton> = (args) => (
  <Button
    {...args}
    css={css`
      width: 12px;
    `}
  />
);

export const Default = Template.bind({});
Default.args = {
  size: 'responsive',
  children: '반응형 버튼',
  themetype: 'kakao',
  onClick: () => {
    alert('클릭되었습니다');
  },
};
