// import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Grid } from '@/components/common/layouts/Grid';


const Theme = () => {
    const items = ['생일', '졸업선물', '스몰럭셔리', '명품선물', '결혼/집들이', '따뜻한선물', '가벼운선물', '팬심저격', '교환권', '건강/비타민', '과일/한우', '출산/키즈']

    return (
        <Wrapper>
            <Grid columns={6}>
                {items.map((item, _) => (
                    <ThemeBox href='/theme/life_small_gift'>
                        <div>
                            <ThemeImg src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png" alt="생일" />
                            <BoxLabel>{item}</BoxLabel>
                        </div>
                    </ThemeBox>
                ))}
            </Grid>
        </Wrapper>
    )
}

export default Theme;

const ThemeImg = styled.img(
    {
        width: '90px',
        height: '90px',
        borderRadius: '32px'
    }
)

const ThemeBox = styled.a(
    {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        outline: 'none'
    }
)

const BoxLabel = styled.p(
    {
        color: 'black',
        textAlign: 'center',
        fontSize: '16px',
        padding: '7px 0px 0px'
    }
)

const Wrapper = styled.div(
    {
        width: '100%',
        height: '416px',
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        padding: '45px 52px 32px',
        boxSizing: 'border-box',
        maxWidth: '1100px',
        margin: '0 auto',
    },
);