type Props = {
  icon?: string;
  title?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const FilterButton = ({ icon, title }: Props) => {
  return (
    <button>
      <div>{icon}</div>
      <p>{title}</p>
    </button>
  );
};
