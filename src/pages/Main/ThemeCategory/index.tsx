import styled from "@emotion/styled";

import { Grid } from "@/components/common/layouts/Grid";
import { breakpoints } from "@/styles/variants";

import ThemeElement from "./ThemeElement";

const ThemeCategory = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <StyledGrid
          columns={{
            initial: 4,
            xs: 4,
            sm: 4,
            md: 6,
            lg: 6,
          }}
        >
          {ChildComponent.map((element, index) => (
            <ThemeElement
              key={index}
              src={element.src}
              title={element.title}
              themeKey={element.themeKey}
            />
          ))}
        </StyledGrid>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ThemeCategory;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  width: 1024px;
  display: flex;
  align-items: center;
  padding: 45px 52px 23px;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
    padding: 14px 14px 3px;
  }
`;

const StyledGrid = styled(Grid)`
  width: 100%;
`;

const ChildComponent = [
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "생일",
    themeKey: "life_small_gift",
  },
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "졸업선물",
    themeKey: "life_small_gift",
  },
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "스몰럭셔리",
    themeKey: "life_small_gift",
  },
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "명품선물",
    themeKey: "life_small_gift",
  },
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "결혼/집들이",
    themeKey: "life_small_gift",
  },
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "따뜻한선물",
    themeKey: "life_small_gift",
  },
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "가벼운선물",
    themeKey: "life_small_gift",
  },
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "팬심저격",
    themeKey: "life_small_gift",
  },
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "교환권",
    themeKey: "life_small_gift",
  },
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "건강/비타민",
    themeKey: "life_small_gift",
  },
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "과일/한우",
    themeKey: "life_small_gift",
  },
  {
    src: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png",
    title: "출산/키즈",
    themeKey: "life_small_gift",
  },
];
