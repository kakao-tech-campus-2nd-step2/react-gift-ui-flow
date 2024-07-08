import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

import { Image } from '@/components/common/Image';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';

import { themeKeys } from '../Theme';

export default () => {
    const ThemeButton = ({ themeKey }: { themeKey: string }) => {
        const divStyle = css`
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 15px;
            img {
                max-width: 90px;
                margin-bottom: 8px;
            }
            padding: 20px 0px;
        `;
        return (
            <Container>
                <Link className={divStyle} to={`/theme/${themeKey}`}>
                    <Image
                        radius={30}
                        ratio="square"
                        alt={themeKey}
                        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                    />
                    <p>{themeKeys[themeKey].label}</p>
                </Link>
            </Container>
        );
    };

    return (
        <Grid columns={{ initial: 2, xs: 4, sm: 4, md: 6 }}>
            {Object.keys(themeKeys).map((themeKey) => (
                <ThemeButton key={themeKey} themeKey={themeKey} />
            ))}
        </Grid>
    );
};
