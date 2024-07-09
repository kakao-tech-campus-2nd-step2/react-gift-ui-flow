import styled from '@emotion/styled';

import { colors } from '@/styles/variants';

import type { RankType } from './FilterType';

export default styled.button<{ rankType: RankType; selectedRankType: RankType }>`
    transition:
        color 200ms ease 0s,
        font-weight 200ms ease 0s;
    color: ${colors.blue};
    font-weight: lighter;
    font-size: 20px;
    ${({ rankType, selectedRankType }) =>
        rankType === selectedRankType ? `font-weight: bold;` : ''}
`;
