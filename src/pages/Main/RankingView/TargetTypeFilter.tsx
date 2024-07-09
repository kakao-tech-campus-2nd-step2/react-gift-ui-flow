import styled from '@emotion/styled';

import { colors } from '@/styles/variants';

import type { TargetType } from './FilterType';

interface Props {
    target: TargetType;
    selectedTarget: TargetType;
    onClick: () => void;
}

const TargetTypeFilter: React.FC<Props> = ({ target, selectedTarget, onClick }: Props) => {
    const contentByTarget = {
        ALL: {
            icon: 'ALL',
            text: '전체',
        },
        FEMALE: {
            icon: '👩🏻‍🦳',
            text: '여성이',
        },
        MALE: {
            icon: '👨🏻‍🦳',
            text: '남성이',
        },
        TEEN: {
            icon: '👦🏻',
            text: '청소년이',
        },
    };

    return (
        <FilterButton target={target} selectedTarget={selectedTarget} onClick={onClick}>
            <div>{contentByTarget[target].icon}</div>
            <p>{contentByTarget[target].text}</p>
        </FilterButton>
    );
};
export default TargetTypeFilter;

const FilterButton = styled.button<Omit<Props, 'onClick'>>`
    div {
        ${({ target, selectedTarget }) =>
            target === selectedTarget
                ? `background-color: ${colors.blue};`
                : `background-color: ${colors.lightBlue};`}

        border-radius: 20px;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p {
        margin-top: 5px;
        transition:
            color 200ms ease 0s,
            font-weight 200ms ease 0s;
        ${({ target, selectedTarget }) =>
            target === selectedTarget
                ? `color: ${colors.blue}; font-weight: bold;`
                : `color: rgb(102, 102, 102);`}
    }
`;
