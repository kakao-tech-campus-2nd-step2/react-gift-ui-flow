import type { Meta, StoryObj } from '@storybook/react';

import TargetTypeFilter from './TargetTypeFilter';

const meta: Meta<typeof TargetTypeFilter> = {
    title: 'Main/RankingView/TargetTypeFilter',
    component: TargetTypeFilter,
    tags: ['autodocs'],
    argTypes: {
        target: {
            control: {
                type: 'select',
                options: ['ALL', 'FEMALE', 'MALE', 'TEEN'],
            },
        },
        selectedTarget: {
            control: {
                type: 'select',
                options: ['ALL', 'FEMALE', 'MALE', 'TEEN'],
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        target: 'ALL',
        selectedTarget: 'ALL',
    },
};
