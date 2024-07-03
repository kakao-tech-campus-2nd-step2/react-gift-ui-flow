import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';

import { ItemImage } from './ItemImage';
// import { Link } from 'react-router-dom';
// import { getDynamicPath } from '@/routes/path';
// import { breakpoints } from '@/styles/variants';

export const ThemeCategory = ()=>{
  return (
    <Wrapper>
      <Container>
        <Grid
          columns={{
            initial: 4,
            md: 6,
          }}
        >
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="생일"
          />
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="졸업선물"
          />
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="스몰럭셔리"
          />
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="명품선물"
          />
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="결혼/집들이"
          />
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="따뜻한선물"
          />
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="가벼운선물"
          />
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="팬심저격"
          />
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="교환권"
          />
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="건강/비타민"
          />
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="과일/한우"
          />
          <ItemImage
            imageSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
            label="출산/키즈"
          />
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default ThemeCategory;

const Wrapper = styled.div`
margin-top: 30px;
`;

