import { Meta, StoryObj } from '@storybook/react';
import Container from '@components/Container'; // Container 컴포넌트 경로에 맞게 수정하세요

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
};

export default meta;

type ContainerStory = StoryObj<typeof Container>;

export const Default: ContainerStory = {
  args: {},
};