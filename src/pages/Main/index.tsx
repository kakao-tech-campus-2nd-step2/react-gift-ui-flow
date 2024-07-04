import { css } from '@emotion/css';

import { Container } from '@/components/common/layouts/Container';

import RankingView from './RankingView';
import ThemeList from './ThemeList';

export default () => {
    return (
        <div>
            {/* theme section */}
            <section className={themeSectionStyle}>
                <Container>
                    <ThemeList />
                </Container>
            </section>
            {/* real-time ranking section */}
            <section>
                <h2>실시간 급상승 선물랭킹</h2>
                <RankingView />
            </section>
        </div>
    );
};

const themeSectionStyle = css`
    padding: 14px 14px 3px;
    @media screen and (min-width: 768px) {
        padding: 45px 52px 23px;
    }
`;
