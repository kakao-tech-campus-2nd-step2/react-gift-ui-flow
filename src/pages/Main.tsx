import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

import { Image } from '@/components/common/Image';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';

import { themeKeys } from './Theme';

export default () => {
    return (
        <div>
            {/* theme section */}
            <section className={sectionStyle}>
                <Container>
                    <ThemeList />
                </Container>
            </section>
        </div>
    );
};

const ThemeList = () => {
    const ThemeBtn = ({ themeKey }: { themeKey: string }) => {
        const divStyle = css`
            padding: 25px 35px 24px;
            text-align: center;
        `;
        return (
            <Link className={divStyle} to={`/theme/${themeKey}`}>
                <Image
                    radius={30}
                    ratio="square"
                    alt={themeKey}
                    src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                />
                <p>{themeKey}</p>
            </Link>
        );
    };

    return (
        <Grid columns={{ initial: 2, xs: 4, sm: 4, md: 6 }}>
            {themeKeys.map((themeKey) => (
                <ThemeBtn key={themeKey} themeKey={themeKey} />
            ))}
        </Grid>
    );
};

const sectionStyle = css`
    padding: 14px 14px 3px;
    @media screen and (min-width: 768px) {
        padding: 45px 52px 23px;
    }
`;
