import { css } from '@emotion/css';

import { Container } from '@/components/common/layouts/Container';

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
        </div>
    );
};

const themeSectionStyle = css`
    padding: 14px 14px 3px;
    @media screen and (min-width: 768px) {
        padding: 45px 52px 23px;
    }
`;
