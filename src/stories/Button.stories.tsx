import { Button, IButton } from '@/components/Button';
import { StoryFn, Meta } from '@storybook/react';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: StoryFn<IButton> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'responsive',
  children: '반응형 버튼',
  theme: 'kakao',
  onClick: () => {
    alert('클릭되었습니다');
  },
};
