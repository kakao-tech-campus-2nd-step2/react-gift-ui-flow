import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';

export default () => {
    return (
        <div>
            {/* theme section */}
            <section>
                <Container>
                    <ThemeList />
                </Container>
            </section>
        </div>
    );
};

const ThemeList = () => {
    const themeKey = [
        '생일',
        '졸업선물',
        '스몰럭셔리',
        '명품선물',
        '결혼/집들이',
        '따뜻한선물',
        '가벼운선물',
        '팬심저격',
        '교환권',
        '건강/비타민',
        '과일/한우',
        '출산/키즈',
    ];

    return (
        <Grid columns={6}>
            {themeKey.map((key) => (
                <div key={key}>{key}</div>
            ))}
        </Grid>
    );
};
