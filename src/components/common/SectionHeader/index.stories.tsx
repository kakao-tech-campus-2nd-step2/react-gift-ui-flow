import React, { ReactNode } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import SectionHeader from '.';

interface MockUseParamsDecoratorProps {
  themeKey: string;
  children: ReactNode;
}

function MockUseParamsDecorator({ themeKey, children }: MockUseParamsDecoratorProps) {
  return (
    <MemoryRouter initialEntries={[`/theme/${themeKey}`]}>
      <Routes>
        <Route path="/theme/:themeKey" element={children} />
      </Routes>
    </MemoryRouter>
  );
}

const meta: Meta<typeof SectionHeader> = {
  title: 'common/SectionHeader/Default',
  component: SectionHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MockUseParamsDecorator themeKey="light-gifts">
        <Story />
      </MockUseParamsDecorator>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {};
