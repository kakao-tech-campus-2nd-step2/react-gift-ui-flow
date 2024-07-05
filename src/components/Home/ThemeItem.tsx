import { Link } from 'react-router-dom';

import type { ThemeType } from '@/types/theme.type';

type ThemeItemProps = {
  theme: ThemeType;
};

function ThemeItem({ theme }: ThemeItemProps) {
  return (
    <Link to={`/theme/${theme.key}`}>
      <div className="home__theme__item">
        <img className="home__theme__item__image" src={theme.image} alt={theme.name} />
        <p>{theme.name}</p>
      </div>
    </Link>
  );
}

export default ThemeItem;
