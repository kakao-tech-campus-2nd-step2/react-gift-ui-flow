// import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Grid } from '@/components/common/layouts/Grid';


const Theme = () => {
    const items = Array.from({ length: 16 }, (_, index) => (
        <div key={index}>
            <a href='/theme/hi' />
            <span>{index}</span>
        </div>
    ));

    return (
        <Wrapper>
            <Grid columns={4}>
                {items}
            </Grid>
        </Wrapper>
    )
}

export default Theme;

const Wrapper = styled.div(
    {
        width: '100%',
        height: '55px',
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        padding: '0 16px',
        boxSizing: 'border-box',
        maxWidth: '1024px',
        margin: '0 auto',
    },
);

// const StyledLink = styled(Link)`
//   margin: 8px;
//   padding: 8px 16px;
//   text-decoration: none;
//   color: #333;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;