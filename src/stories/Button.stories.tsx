import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'responsive'],
      },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
  args: {
    theme: 'default',
    size: 'medium',
    children: '버튼',
  },
};

export const Primary: Story = {
  render: (args) => <Button {...args} />,
  args: {
    theme: 'primary',
    size: 'medium',
    children: '버튼',
  },
};

export const Secondary: Story = {
  render: (args) => <Button {...args} />,
  args: {
    theme: 'secondary',
    size: 'medium',
    children: '버튼',
  },
};

export const Small: Story = {
  render: (args) => <Button {...args} />,
  args: {
    theme: 'default',
    size: 'small',
    children: '버튼',
  },
};

export const Large: Story = {
  render: (args) => <Button {...args} />,
  args: {
    theme: 'default',
    size: 'large',
    children: '버튼',
  },
};

export const Responsive: Story = {
  render: (args) => <Button {...args} />,
  args: {
    theme: 'default',
    size: 'responsive',
    children: '버튼',
  },
};
