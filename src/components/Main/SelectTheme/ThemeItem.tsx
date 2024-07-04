type Props = {
  imgUrl?: string;
  title?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ThemeItem = ({ imgUrl, title }: Props) => {
  return (
    <div>
      <div>
        <img src={imgUrl} />
        <p>{title}</p>
      </div>
    </div>
  );
};
