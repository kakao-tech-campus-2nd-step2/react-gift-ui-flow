import styled from '@emotion/styled';

import { Image } from '@/components/common/Image/index';

import { Container } from '../common/layouts/Container';
import { Grid } from '../common/layouts/Grid';

const ThemeItem = styled.section`
  margin: 0 auto;
  text-align: center;
  padding: 25px 35px 24px;
  max-width: 100%;
`;

const ThemeImage = styled(Image)``;

const Wrapper = styled(Grid)`
  padding: 45px 0 23px 0;
  margin: 0 
  max-width: 100%;
`;

const ThemeGrid = () => (
  <Wrapper columns={6} gap={12}>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="생일"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>생일</p>
    </ThemeItem>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="졸업선물"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>졸업선물</p>
    </ThemeItem>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="스몰럭셔리"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>스몰럭셔리</p>
    </ThemeItem>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="명품선물"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>명품선물</p>
    </ThemeItem>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="결혼/집들이"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>결혼/집들이</p>
    </ThemeItem>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="따뜻한선물"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>따뜻한선물</p>
    </ThemeItem>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="가벼운선물"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>가벼운선물</p>
    </ThemeItem>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="팬심저격"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>팬심저격</p>
    </ThemeItem>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="교환권"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>교환권</p>
    </ThemeItem>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="건강/비타민"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>건강/비타민</p>
    </ThemeItem>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="과일/한우"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>과일/한우</p>
    </ThemeItem>
    <ThemeItem>
      <ThemeImage
        src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
        alt="출산/키즈"
        width="90px"
        radius={32}
        ratio="square"
      />
      <p>출산/키즈</p>
    </ThemeItem>
  </Wrapper>
);

export const ThemeMenu = () => {
  return (
    <Container>
      <ThemeGrid />
    </Container>
  );
};

export default ThemeMenu;
