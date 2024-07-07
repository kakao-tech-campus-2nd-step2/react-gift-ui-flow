import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSection } from './ThemeSection';

const ChildComponent = () => (
  <>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
    <div>16</div>
  </>
);

const meta = {
  title: 'section/Theme',
  component: ThemeSection,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResponsiveColumns: Story = {
  args: {
    gap: 0,
    columns: {
      initial: 4,
      sm: 4,
      md: 4,
      lg: 6,
    },
    children: <ChildComponent />,
  },
};
