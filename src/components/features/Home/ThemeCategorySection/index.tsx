import styled from '@emotion/styled';

import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { Image } from '@/components/common/Image';

export const ThemeCategorySection = () => {
  return (
    <StyledThemeCategorySection>
      <div>
        <Container>
          <Grid columns={4}>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="생일"
              />
              <CategoryTitle>생일</CategoryTitle>
            </ThemeCategoryItem>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="졸업선물"
              />
              <CategoryTitle>졸업선물</CategoryTitle>
            </ThemeCategoryItem>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="스몰럭셔리"
              />
              <CategoryTitle>스몰럭셔리</CategoryTitle>
            </ThemeCategoryItem>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="명품선물"
              />
              <CategoryTitle>명품선물</CategoryTitle>
            </ThemeCategoryItem>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="결혼/집들이"
              />
              <CategoryTitle>결혼/집들이</CategoryTitle>
            </ThemeCategoryItem>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="따뜻한선물"
              />
              <CategoryTitle>따뜻한선물</CategoryTitle>
            </ThemeCategoryItem>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="가벼운선물"
              />
              <CategoryTitle>가벼운선물</CategoryTitle>
            </ThemeCategoryItem>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="팬심저격"
              />
              <CategoryTitle>팬심저격</CategoryTitle>
            </ThemeCategoryItem>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="교환권"
              />
              <CategoryTitle>교환권</CategoryTitle>
            </ThemeCategoryItem>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="건강/비타민"
              />
              <CategoryTitle>건강/비타민</CategoryTitle>
            </ThemeCategoryItem>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="과일/한우"
              />
              <CategoryTitle>과일/한우</CategoryTitle>
            </ThemeCategoryItem>
            <ThemeCategoryItem>
              <CategoryImage
                src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                alt="출산/키즈"
              />
              <CategoryTitle>출산/키즈</CategoryTitle>
            </ThemeCategoryItem>
          </Grid>
        </Container>
      </div>
    </StyledThemeCategorySection>
  );
};

const StyledThemeCategorySection = styled.div`
  padding: 14px 14px 3px;
`;

const ThemeCategoryItem = styled.div`
  width: 100%;
  padding: 13px 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 50px;
  border-radius: 18px;
`;

const CategoryTitle = styled.p`
  padding-top: 5px;
  font-size: 13px;
  line-height: 17px;
  color: #333;
`;
