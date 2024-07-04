import styled from "@emotion/styled";

import { breakpoints } from "@/styles/variants";

type Prop = {
  themeKey: string;
};

const ThemeHeader: React.FC<Prop> = ({ themeKey }) => {
  return (
    <Wrapper themeKey={themeKey}>
      <StyledDiv>
        <Label>{themes[themeKey].label}</Label>
        <Title>{themes[themeKey].title}</Title>
        <Description>{themes[themeKey].description}</Description>
      </StyledDiv>
    </Wrapper>
  );
};
export default ThemeHeader;

type Theme = {
  [key: string]: {
    label: string;
    title: string;
    description: string;
    backgroundColor: string;
  };
};

const themes: Theme = {
  life_small_gift: {
    label: "가벼운 선물",
    title: "예산은 가볍게, 감동은 무겁게❤️",
    description: "당신의 센스를 뽐내줄 부담 없는 선물",
    backgroundColor: "rgb(75, 77, 81)",
  },
};

const Wrapper = styled.section<Pick<Prop, "themeKey">>(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 20px",
    backgroundColor: "rgb(75, 77, 80)",
    height: "auto",
    [`@media screen and (max-width: ${breakpoints.sm})`]: {
      padding: "27px 20px 23px",
    },
  },
  ({ themeKey }) => ({
    backgroundColor: themes[themeKey].backgroundColor,
  }),
);

const StyledDiv = styled.div`
  width: 1024px;
  height: initial;
  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const Label = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 13px;
    line-height: 16px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  color: rgb(255, 255, 255);

  font-size: 30px;
  line-height: 40px;
  padding-top: 12px;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 18px;
    line-height: 26px;
    padding-top: 0;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.55);

  padding-top: 12px;
  font-size: 24px;
  line-height: 32px;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding-top: 5px;
    font-size: 14px;
    line-height: 20px;
  }
`;
