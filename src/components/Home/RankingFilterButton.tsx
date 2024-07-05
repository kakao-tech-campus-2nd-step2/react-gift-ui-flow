type RankingFilterButtonProps = {
  selected?: boolean;
  title: string;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function RankingFilterButton({
  selected = false,
  title,
  text,
  onClick = () => {},
}: RankingFilterButtonProps) {
  return (
    <button className="ranking__filter__button" onClick={onClick}>
      <p className={'filter__button__text' + (selected ? ' selected' : '')}>{text}</p>
      <p className={'filter__button__title' + (selected ? ' selected' : '')}>{title}</p>
    </button>
  );
}

export default RankingFilterButton;
