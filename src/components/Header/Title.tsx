import { themeConfig } from '@/components/ThemeConfig';

interface TitleProps {
  themeKey?: string;
}

const Title = ({ themeKey }: TitleProps) => {
  const theme = themeKey ? themeConfig[themeKey] : null;

  return (
    <div>
      {theme ? (
        <>
          <h1>{theme.label}</h1>
          <h2>{theme.title}</h2>
          <p>{theme.description}</p>
        </>
      ) : (
        <h1>선물하기</h1>
      )}
    </div>
  );
};

export default Title;
