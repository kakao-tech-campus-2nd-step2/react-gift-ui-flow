type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProp = {
  hContent: string;
  hNumber: HeadingLevel;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({ hNumber = 1, hContent, ...props }: HeadingProp) => {
  switch (hNumber) {
    case 1:
      return <h1 {...props}>{hContent}</h1>;
    case 2:
      return <h2 {...props}>{hContent}</h2>;
    case 3:
      return <h3 {...props}>{hContent}</h3>;
    case 4:
      return <h4 {...props}>{hContent}</h4>;
    case 5:
      return <h5 {...props}>{hContent}</h5>;
    case 6:
      return <h6 {...props}>{hContent}</h6>;
    default:
      return <h1 {...props}>{hContent}</h1>;
  }
};
