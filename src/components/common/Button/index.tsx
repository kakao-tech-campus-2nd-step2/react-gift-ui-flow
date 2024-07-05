import styled from "@emotion/styled";

import { breakpoints } from "@/styles/variants";
import COLOR from "@/constants/color";

type Props = {
  theme?:
    | "kakao"
    | "outline"
    | "black"
    | "lightGray"
    | "darkGray"
    | "transparent";
  size?: "large" | "small" | "responsive";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ ...props }: Props) => {
  return <Wrapper {...props} />;
};

const Wrapper = styled.button<Pick<Props, "theme" | "size">>(
  {
    width: "100%",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 200ms",
  },
  ({ size = "responsive" }) => {
    const largeStyle = {
      height: "60px",
      fontSize: "16px",
    };

    const smallStyle = {
      height: "40px",
      fontSize: "15px",
    };
    if (size === "large") {
      return largeStyle;
    }

    if (size === "small") {
      return smallStyle;
    }

    return {
      ...smallStyle,
      [`@media screen and (min-width:${breakpoints.sm})`]: {
        ...largeStyle,
      },
    };
  },
  ({ theme = "kakao" }) => {
    if (theme === "outline") {
      return {
        boxShadow: "0 0 0 1px #ccc inset",
        color: COLOR.GRAY_900,
        backgroundColor: "inherit",
        border: "1px solid",

        "&:hover": {
          backgroundColor: COLOR.GRAY_200,
        },
      };
    }

    if (theme === "black") {
      return {
        color: COLOR.GRAY_200,
        backgroundColor: COLOR.BLACK_100,

        "&:hover": {
          backgroundColor: COLOR.BLACK_200,
        },
      };
    }

    if (theme === "lightGray") {
      return {
        color: COLOR.BLACK_100,
        backgroundColor: COLOR.GRAY_300,

        "&:hover": {
          backgroundColor: COLOR.GRAY_400,
        },
      };
    }

    if (theme === "darkGray") {
      return {
        color: COLOR.WHITE,
        backgroundColor: COLOR.GRAY_500,

        "&:hover": {
          backgroundColor: COLOR.GRAY_600,
        },
      };
    }
    if (theme === "transparent") {
      return {
        color: COLOR.BLACK,
        backgroundColor: "transparent",
        outline: "none",
        border: "none",
      };
    }

    return {
      color: COLOR.BLACK_100,
      backgroundColor: COLOR.PRIMARY,
      outline: "none",
      border: "none",

      "&:hover": {
        backgroundColor: COLOR.PRIMARY,
      },
    };
  },
);
