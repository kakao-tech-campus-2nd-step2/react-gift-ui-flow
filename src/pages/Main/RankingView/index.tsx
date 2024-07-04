import { css } from '@emotion/css';
import { useState } from 'react';

import { colors } from '@/styles/variants';

import type { RankType, TargetType } from './FilterType';
import RankingList from './RankingList';
import RankTypeFilter from './RankTypeFilter';
import TargetTypeFilter from './TargetTypeFilter';

export default () => {
    const [targetType, setTargetType] = useState<TargetType>('ALL');
    const [rankType, setRankType] = useState<RankType>('MANY_WISH');

    return (
        <div
            className={css`
                padding: 0px 16px 32px;
            `}
        >
            {/* ranking filter */}
            <div className={targetTypeFilterContainerStyle}>
                <TargetTypeFilter
                    target={'ALL'}
                    selectedTarget={targetType}
                    onClick={() => setTargetType('ALL')}
                />
                <TargetTypeFilter
                    target={'FEMALE'}
                    selectedTarget={targetType}
                    onClick={() => setTargetType('FEMALE')}
                />
                <TargetTypeFilter
                    target={'MALE'}
                    selectedTarget={targetType}
                    onClick={() => setTargetType('MALE')}
                />
                <TargetTypeFilter
                    target={'TEEN'}
                    selectedTarget={targetType}
                    onClick={() => setTargetType('TEEN')}
                />
            </div>
            <div className={rankTypeFilterContainerStyle}>
                <RankTypeFilter
                    rankType={'MANY_WISH'}
                    selectedRankType={rankType}
                    onClick={() => setRankType('MANY_WISH')}
                >
                    받고 싶어한
                </RankTypeFilter>
                <RankTypeFilter
                    rankType={'MANY_RECEIVE'}
                    selectedRankType={rankType}
                    onClick={() => setRankType('MANY_RECEIVE')}
                >
                    많이 선물한
                </RankTypeFilter>
                <RankTypeFilter
                    rankType={'MANY_WISH_RECEIVE'}
                    selectedRankType={rankType}
                    onClick={() => setRankType('MANY_WISH_RECEIVE')}
                >
                    위시로 받은
                </RankTypeFilter>
            </div>
            <RankingList targetType={targetType} rankType={rankType} />
        </div>
    );
};

const targetTypeFilterContainerStyle = css`
    display: flex;
    justify-content: space-between;
    margin: 10px 20px 10px;
    @media screen and (min-width: 768px) {
        margin: 20px 100px 20px;
    }
`;
const rankTypeFilterContainerStyle = css`
    display: flex;
    justify-content: space-between;
    margin: 10px 10px 50px;
    padding: 15px 50px;
    border-radius: 20px;
    @media screen and (min-width: 768px) {
        padding: 15px 250px;
        p {
            font-size: 16px;
        }
    }
    background-color: ${colors.lightBlue};
`;
