type Props = {
  content: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = ({ content, ...props }: Props) => {
  return <p {...props}>{content}</p>;
};
