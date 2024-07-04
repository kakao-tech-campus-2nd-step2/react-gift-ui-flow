import { css } from '@emotion/css';
import { useState } from 'react';

import type { TargetType } from '../FilterType';
import TargetTypeFilter from './TargetTypeFilter';

export default () => {
    const [selectedTarget, setSelectedTarget] = useState<TargetType>('ALL');

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
                    selectedTarget={selectedTarget}
                    setSelectedTarget={setSelectedTarget}
                />
                <TargetTypeFilter
                    target={'FEMALE'}
                    selectedTarget={selectedTarget}
                    setSelectedTarget={setSelectedTarget}
                />
                <TargetTypeFilter
                    target={'MALE'}
                    selectedTarget={selectedTarget}
                    setSelectedTarget={setSelectedTarget}
                />
                <TargetTypeFilter
                    target={'TEEN'}
                    selectedTarget={selectedTarget}
                    setSelectedTarget={setSelectedTarget}
                />
            </div>
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
