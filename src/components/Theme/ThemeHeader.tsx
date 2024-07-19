import type { ThemeType } from '@/types/theme.type';

type ThemeHeaderProps = {
  theme?: ThemeType;
};

function ThemeHeader({ theme }: ThemeHeaderProps) {
  if (typeof theme === 'undefined') return null;
  else if (typeof theme.header === 'string') {
    return <img className="theme__header__image" src={theme.header} />;
  } else
    return (
      <div
        style={{
          backgroundColor: theme.header.backgroundColor,
        }}
        className="theme__header__frame"
      >
        <div className="theme__header">
          <p className="theme__header__label">{theme.header.label}</p>
          <p className="theme__header__title">{theme.header.title}</p>
          {theme.header.description.map((description) => (
            <p className="theme__header__description" key={description}>
              {description}
            </p>
          ))}
        </div>
      </div>
    );
}

export default ThemeHeader;
