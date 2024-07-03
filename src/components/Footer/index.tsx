import styled from "@emotion/styled";

import { Grid } from "../common/layouts/Grid";

export default () => {
    return (
        <Footar>
            <Grid columns={2}>
                <div>카카오톡 선물하기</div>
            </Grid>
        </Footar>
    );
};

const Footar = styled.footer(
    {
        padding: '28px 16px 88px',
        width: '100%',
        maxWidth: '100vw',
        backgroundColor: 'rgb(250, 250, 252)',
    }
);
