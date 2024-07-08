import styled from '@emotion/styled';

import { Grid } from '../common/layouts/Grid';

export default () => {
    return (
        <Footer>
            <Grid columns={2}>
                <div>카카오톡 선물하기</div>
            </Grid>
        </Footer>
    );
};

const Footer = styled.footer({
    padding: '28px 16px 88px',
    backgroundColor: 'rgb(250, 250, 252)',
});
